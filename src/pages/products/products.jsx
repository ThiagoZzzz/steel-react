import { useState } from 'react'
import { PlusIcon } from '@phosphor-icons/react'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/products'
import { useCartActions } from '../../hooks/useCartActions'

import {
  ProductsContainer,
  ProductsHeader,
  ProductsEyebrow,
  FilterBar,
  FilterBtn,
  ProductGrid,
  ProductCard,
  CardImage,
  CardInfo,
  CardName,
  CardDesc,
  CategoryBadge,
  CardMeta,
  AddCartBtn,
} from './style'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const { handleAddToCart } = useCartActions()

  const filtered =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)


  return (
    <ProductsContainer>
      <ProductsHeader>
        <ProductsEyebrow>— The Collection</ProductsEyebrow>
        <h1>Every Watch<br />A Statement.</h1>
        <p>
          {filtered.length} timepiece{filtered.length !== 1 ? 's' : ''} available
        </p>
      </ProductsHeader>

      <FilterBar>
        {PRODUCT_CATEGORIES.map((cat) => (
          <FilterBtn
            key={cat}
            $active={cat === activeCategory}
            aria-pressed={cat === activeCategory}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </FilterBtn>
        ))}
      </FilterBar>

      <ProductGrid>
        {filtered.map((product) => (
          <ProductCard key={product.id}>
            <CardImage>
              <img src={product.image} alt={product.name} loading="lazy" />
            </CardImage>
            <CardInfo>
              <div>
                <CardName>{product.name}</CardName>
                <CardDesc>{product.description}</CardDesc>
                <CategoryBadge>{product.category}</CategoryBadge>
              </div>
              <CardMeta>
                <span className="price">${product.price}</span>
                <AddCartBtn
                  onClick={() => handleAddToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <PlusIcon size={24} />
                  Add to Cart
                </AddCartBtn>
              </CardMeta>
            </CardInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  )
}

export default Products
