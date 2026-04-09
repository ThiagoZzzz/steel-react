import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

export const useCartActions = () => {
    const { cartItems, addToCart, clearCart } = useCart();
    const { showToast } = useToast();

    const handleAddToCart = (product) => {
        addToCart(product);
        showToast(`${product.name} added to cart`);
    };

    const handleClearCart = () => {
        if (cartItems.length === 0) {
            showToast('The cart is empty');
            return;
        }
        clearCart();
        showToast('The cart was emptied');
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            showToast('The cart is empty');
            return;
        }
        showToast('Checkout coming soon!');
    };

    return { handleAddToCart, handleClearCart, handleCheckout };
};
