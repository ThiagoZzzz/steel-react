import { useNavigate } from 'react-router-dom'
import { getFeaturedProducts } from '../../data/products'
import Carousel from '../../components/common/carousel'

import {
  HomeContainer,
  HeroSection,
  HeroOverlay,
  HeroData,
  HeroEyebrow,
  HeroMedia,
  HeroProduct,
  CTAButton,
  FeaturedBlock,
  FeaturedLabel,
  FeaturedDivider,
} from './style'

const featuredProducts = getFeaturedProducts()

const Home = () => {
  const navigate = useNavigate()

  return (
    <HomeContainer>
      <HeroSection>
        <HeroMedia>
          <img
            src="/bg-hero.jpeg"
            alt="STEEL luxury backdrop"
            loading="eager"
          />
        </HeroMedia>

        <HeroOverlay />

        <HeroData>
          <HeroEyebrow>EST. 2010 — Luxury Timepieces</HeroEyebrow>
          <h1>Elegance &<br />Precision.</h1>
          <p>
            If you want a watch that matches your attitude,
            your outfit, and your potential — you're in the right place.
          </p>
          <CTAButton onClick={() => navigate('/products')}>
            Explore Collection
          </CTAButton>
        </HeroData>

        <HeroProduct
          src="/reloj1.png"
          alt="Featured STEEL timepiece"
        />
      </HeroSection>

      <FeaturedBlock>
        <FeaturedDivider />
        <FeaturedLabel>Featured Timepieces</FeaturedLabel>
        <FeaturedDivider />
      </FeaturedBlock>

      <Carousel products={featuredProducts} />

    </HomeContainer>
  )
}

export default Home
