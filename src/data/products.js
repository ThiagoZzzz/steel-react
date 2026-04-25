export const PRODUCT_CATEGORIES = ['All', 'Classic', 'Sport', 'Limited'];

export const PRODUCTS = [
  {
    id: 1,
    name: 'DEEP NIGHT',
    description: 'Black steel, total black dial',
    price: 390,
    category: 'Classic',
    featured: false,
    image: '/reloj3.png',
  },
  {
    id: 2,
    name: 'SEA FRAME',
    description: 'Steel, navy blue dial & details',
    price: 205,
    category: 'Sport',
    featured: false,
    image: '/reloj4.png',
  },
  {
    id: 3,
    name: 'BRILLIANT PEARL',
    description: 'Steel, pearl white dial',
    price: 899,
    category: 'Classic',
    featured: false,
    image: '/reloj5.png',
  },
  {
    id: 4,
    name: 'ARCTIC BLUE',
    description: 'Steel, ice blue ceramic bezel',
    price: 970,
    category: 'Limited',
    featured: true,
    image: '/watch10.png',
  },
  {
    id: 5,
    name: 'Crimson Steel',
    description: 'A classic-style watch with crimson-coloured details',
    price: 4200,
    category: 'Limited',
    featured: true,
    image: '/watch2.png',
  },
  {
    id: 6,
    name: 'Emerald Gold',
    description: 'A classic-style gold-plated watch with an emerald green dial',
    price: 7300,
    category: 'Limited',
    featured: true,
    image: '/watch4.png',
  },
  {
    id: 7,
    name: 'Classic Night',
    description: 'A classic-style watch with an black dial',
    price: 2000,
    category: 'Classic',
    featured: false,
    image: '/watch5.png',
  },
  {
    id: 8,
    name: 'Multistage',
    description: 'Watch featuring several dials for its various functions',
    price: 3340,
    category: 'Sport',
    featured: true,
    image: '/watch6.png',
  }
];

export const getFeaturedProducts = () => PRODUCTS.filter((p) => p.featured);
