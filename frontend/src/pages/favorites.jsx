import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Trash2 } from 'lucide-react';

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();
  const { showSuccess } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    showSuccess(`Added ${product.name} to cart!`);
  };

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product.id);
    showSuccess(`Removed ${product.name} from favorites!`);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mb-6">Save products you love for later</p>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 rounded-xl font-medium text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: '#C1A875' }}
          >
            Discover Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#333333' }}>
            My Wishlist
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {favorites.length} {favorites.length === 1 ? 'item' : 'items'}
            </span>
            <button
              onClick={clearFavorites}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Remove from Favorites Button */}
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-50 backdrop-blur-sm border border-red-200 transition-all duration-300 flex items-center justify-center hover:bg-red-100 text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromFavorites(product);
                  }}
                >
                  <Trash2 size={18} />
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/20 capitalize">
                    {product.category}
                  </span>
                </div>

                {/* Quick Add to Cart Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-medium text-gray-800 hover:bg-white transition-all duration-300 flex items-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Product Name */}
                <h3 
                  className="text-lg font-semibold mb-2 line-clamp-2 cursor-pointer hover:text-opacity-80"
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: '#7D6A58' }}
                >
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="text-xl font-bold"
                    style={{ color: '#C1A875' }}
                  >
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 py-3 px-4 rounded-xl font-medium transition-all hover:shadow-md hover:bg-opacity-90"
                    style={{ 
                      backgroundColor: '#C1A875', 
                      color: 'white' 
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => handleRemoveFromFavorites(product)}
                    className="py-3 px-4 border border-red-200 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all"
                  >
                    <Heart size={18} className="fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
