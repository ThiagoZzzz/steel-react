import { Link } from 'react-router-dom'
import {
  ShoppingCartSimpleIcon,
  TrashIcon,
  MinusIcon,
  PlusIcon,
} from '@phosphor-icons/react'
import { useCart } from '../../contexts/CartContext'
import { useCartActions } from '../../hooks/useCartActions'

import {
  CartContainer,
  CartHeader,
  CartEyebrow,
  CartEmpty,
  EmptyIcon,
  CartLayout,
  CartItems,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemDesc,
  ItemPrice,
  ItemRemove,
  ItemQuantityRow,
  ItemQtyBtn,
  ItemQtyValue,
  CartSummary,
  SummaryRow,
  SummaryTotal,
  CheckoutBtn,
  ClearCartBtn,
} from './style'

const Cart = () => {
  const { cartItems, subtotal, removeFromCart, changeQuantity } = useCart();
  const { handleClearCart, handleCheckout } = useCartActions();
  const isEmpty = cartItems.length === 0;

  return (
    <CartContainer>
      <CartHeader>
        <CartEyebrow>— Your Cart</CartEyebrow>
        <h1>Your Selection.</h1>
      </CartHeader>

      {isEmpty ? (
        <CartEmpty>
          <EmptyIcon>
            <ShoppingCartSimpleIcon size={48} color="var(--text-muted)" weight="thin" />
          </EmptyIcon>
          <p>Your cart is empty.</p>
          <Link to="/products">Explore Collection →</Link>
        </CartEmpty>
      ) : (
        <CartLayout>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img src={item.image} alt={item.name} />
                </ItemImage>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemDesc>{item.description}</ItemDesc>
                  <ItemQuantityRow>
                    <ItemQtyBtn
                      onClick={() => changeQuantity(item.id, -1)}
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon size={14} weight="bold" />
                    </ItemQtyBtn>
                    <ItemQtyValue>{item.quantity}</ItemQtyValue>
                    <ItemQtyBtn
                      onClick={() => changeQuantity(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      <PlusIcon size={14} weight="bold" />
                    </ItemQtyBtn>
                  </ItemQuantityRow>
                  <ItemPrice>${item.price * item.quantity}</ItemPrice>
                </ItemInfo>
                <ItemRemove
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <TrashIcon size={18} weight="regular" />
                </ItemRemove>
              </CartItem>
            ))}
          </CartItems>

          <CartSummary>
            <h3>Order Summary</h3>
            <SummaryRow>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Shipping</span>
              <span>Free</span>
            </SummaryRow>
            <SummaryTotal>
              <span>Total</span>
              <span>${subtotal}</span>
            </SummaryTotal>
            <CheckoutBtn onClick={handleCheckout}>Proceed to Checkout</CheckoutBtn>
            <ClearCartBtn onClick={handleClearCart}>Clear Cart</ClearCartBtn>
          </CartSummary>
        </CartLayout>
      )}
    </CartContainer>
  )
}

export default Cart
