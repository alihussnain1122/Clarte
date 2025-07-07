const mongoose = require('mongoose');
const Product = require('./models/Prooducts');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

const sampleProducts = [
  {
    name: "Vitamin C Brightening Serum",
    description: "Powerful antioxidant serum with 20% Vitamin C to brighten and even skin tone.",
    price: 89.99,
    originalPrice: 119.99,
    category: "serums",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 234,
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Vitamin E"],
    skinTypes: ["All Skin Types", "Dull Skin", "Uneven Tone"],
    isNew: true,
    isFeatured: true,
    inStock: true,
    stockQuantity: 50,
    brand: "Clarte",
    size: "30ml",
    tags: ["brightening", "antioxidant", "vitamin-c"]
  },
  {
    name: "Gentle Foaming Cleanser",
    description: "Sulfate-free cleanser that removes makeup and impurities without stripping skin.",
    price: 34.99,
    category: "cleansers",
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 189,
    ingredients: ["Chamomile Extract", "Aloe Vera", "Glycerin"],
    skinTypes: ["Sensitive Skin", "Dry Skin", "Normal Skin"],
    isNew: false,
    isFeatured: false,
    inStock: true,
    stockQuantity: 75,
    brand: "Clarte",
    size: "150ml",
    tags: ["gentle", "sulfate-free", "cleanser"]
  },
  {
    name: "Hydrating Night Moisturizer",
    description: "Rich, nourishing night cream with peptides and ceramides for overnight repair.",
    price: 67.99,
    category: "moisturizers",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 312,
    ingredients: ["Peptides", "Ceramides", "Shea Butter"],
    skinTypes: ["Dry Skin", "Mature Skin", "Normal Skin"],
    isNew: false,
    isFeatured: true,
    inStock: true,
    stockQuantity: 30,
    brand: "Clarte",
    size: "50ml",
    tags: ["night-cream", "anti-aging", "moisturizer"]
  },
  {
    name: "Clay Purifying Mask",
    description: "Deep cleansing clay mask with charcoal to draw out impurities and minimize pores.",
    price: 42.99,
    category: "masks",
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 156,
    ingredients: ["Kaolin Clay", "Charcoal", "Tea Tree Oil"],
    skinTypes: ["Oily Skin", "Combination Skin", "Acne-Prone"],
    isNew: true,
    isFeatured: false,
    inStock: true,
    stockQuantity: 45,
    brand: "Clarte",
    size: "75ml",
    tags: ["clay-mask", "purifying", "charcoal"]
  },
  {
    name: "Retinol Renewal Treatment",
    description: "Advanced retinol treatment to reduce fine lines and improve skin texture.",
    price: 95.99,
    category: "treatments",
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 278,
    ingredients: ["Retinol", "Squalane", "Niacinamide"],
    skinTypes: ["Mature Skin", "All Skin Types"],
    isNew: false,
    isFeatured: true,
    inStock: true,
    stockQuantity: 25,
    brand: "Clarte",
    size: "30ml",
    tags: ["retinol", "anti-aging", "treatment"]
  },
  {
    name: "Balancing Toner",
    description: "Alcohol-free toner that balances pH and prepares skin for serums.",
    price: 28.99,
    category: "toners",
    image: "/api/placeholder/300/300",
    rating: 4.4,
    reviews: 143,
    ingredients: ["Rose Water", "Witch Hazel", "Glycolic Acid"],
    skinTypes: ["All Skin Types", "Oily Skin"],
    isNew: false,
    isFeatured: false,
    inStock: true,
    stockQuantity: 60,
    brand: "Clarte",
    size: "200ml",
    tags: ["toner", "balancing", "alcohol-free"]
  },
  {
    name: "SPF 50 Daily Sunscreen",
    description: "Lightweight, broad-spectrum sunscreen with zinc oxide and titanium dioxide.",
    price: 39.99,
    category: "sunscreens",
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 201,
    ingredients: ["Zinc Oxide", "Titanium Dioxide", "Hyaluronic Acid"],
    skinTypes: ["All Skin Types", "Sensitive Skin"],
    isNew: true,
    isFeatured: false,
    inStock: true,
    stockQuantity: 80,
    brand: "Clarte",
    size: "50ml",
    tags: ["sunscreen", "spf-50", "broad-spectrum"]
  },
  {
    name: "Hyaluronic Acid Serum",
    description: "Multi-molecular weight hyaluronic acid for deep hydration and plumping.",
    price: 56.99,
    category: "serums",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 345,
    ingredients: ["Hyaluronic Acid", "Vitamin B5", "Aloe Vera"],
    skinTypes: ["Dry Skin", "Dehydrated Skin", "All Skin Types"],
    isNew: false,
    isFeatured: true,
    inStock: true,
    stockQuantity: 40,
    brand: "Clarte",
    size: "30ml",
    tags: ["hyaluronic-acid", "hydrating", "serum"]
  },
  {
    name: "Vitamin E Recovery Oil",
    description: "Nourishing facial oil with vitamin E and rosehip for skin repair and hydration.",
    price: 78.99,
    category: "treatments",
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 167,
    ingredients: ["Vitamin E", "Rosehip Oil", "Jojoba Oil"],
    skinTypes: ["Dry Skin", "Mature Skin", "Normal Skin"],
    isNew: false,
    isFeatured: false,
    inStock: true,
    stockQuantity: 35,
    brand: "Clarte",
    size: "30ml",
    tags: ["facial-oil", "vitamin-e", "recovery"]
  },
  {
    name: "Glycolic Acid Exfoliating Pads",
    description: "Pre-soaked pads with glycolic acid for gentle daily exfoliation and skin renewal.",
    price: 52.99,
    category: "treatments",
    image: "/api/placeholder/300/300",
    rating: 4.3,
    reviews: 198,
    ingredients: ["Glycolic Acid", "Chamomile Extract", "Green Tea"],
    skinTypes: ["Oily Skin", "Combination Skin", "Normal Skin"],
    isNew: true,
    isFeatured: false,
    inStock: true,
    stockQuantity: 55,
    brand: "Clarte",
    size: "60 pads",
    tags: ["exfoliating", "glycolic-acid", "pads"]
  }
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products seeded successfully!');
    console.log(`📦 Added ${sampleProducts.length} products to the database`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
