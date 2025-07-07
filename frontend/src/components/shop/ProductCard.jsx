import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite = false,
  className = "" 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleToggleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite(product.id);
    }
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 flex items-center justify-center ${
            isFavorite 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart 
            size={18} 
            className={`transition-all duration-300 ${
              isFavorite ? 'fill-current' : 'hover:fill-current'
            }`} 
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/20">
            {product.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-yellow-700 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Rating Stars (mock for now) */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">(4.2)</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-xs text-gray-500 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              isHovered
                ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/25'
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            }`}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

// Demo component to showcase the ProductCard
const ProductCardDemo = () => {
  const [favorites, setFavorites] = useState(new Set());

  const sampleProduct = {
    id: 1,
    name: "Luxe Silk Scarf",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
    price: 89.99,
    description: "Handwoven silk scarf with delicate gold threading. Perfect for elevating any outfit with timeless elegance and sophisticated charm.",
    category: "Accessories"
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Add your cart logic here
  };

  const handleToggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Product Card Showcase
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Card Demo */}
          <ProductCard
            product={sampleProduct}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.has(sampleProduct.id)}
          />
          
          {/* Additional sample cards */}
          <ProductCard
            product={{
              ...sampleProduct,
              id: 2,
              name: "Artisan Ceramic Vase",
              image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop",
              price: 124.50,
              description: "Hand-thrown ceramic vase with soft rose clay glaze. Each piece is unique with subtle variations.",
              category: "Home Decor"
            }}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.has(2)}
          />
          
          <ProductCard
            product={{
              ...sampleProduct,
              id: 3,
              name: "Cashmere Throw Blanket",
              image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
              price: 199.00,
              description: "Ultra-soft cashmere throw in warm ivory. Sustainably sourced and ethically made for ultimate comfort.",
              category: "Home Textiles"
            }}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.has(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;