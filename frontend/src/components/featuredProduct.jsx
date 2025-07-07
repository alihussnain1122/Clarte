import React from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showSuccess } = useToast();

  // Sample skincare product data
  const products = [
    {
      id: 1,
      name: "Radiance Renewal Serum",
      price: 28.99,
      originalPrice: 32.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center",
      category: "Serums",
      isNew: true,
      description: "Vitamin C enriched brightening serum",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 2,
      name: "Gentle Cleansing Balm",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop&crop=center",
      category: "Cleansers",
      description: "Nourishing oil-based cleanser",
      rating: 4.3,
      reviews: 76
    },
    {
      id: 3,
      name: "Hydrating Rose Mist",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      category: "Toners",
      description: "Refreshing rose water toner",
      rating: 4.2,
      reviews: 54
    },
    {
      id: 4,
      name: "Luxe Night Cream",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center",
      category: "Moisturizers",
      isBestseller: true,
      description: "Rich anti-aging night treatment",
      rating: 4.7,
      reviews: 132
    },
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    showSuccess(`Added ${product.name} to cart!`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FCFBF7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}>
            Featured Collections
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#C1A875' }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
            Discover our handpicked selection of premium natural skincare essentials
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isNew && (
                  <span className="px-3 py-1 text-xs font-medium text-white rounded-full" style={{ backgroundColor: '#C1A875' }}>
                    NEW
                  </span>
                )}
                {product.isBestseller && (
                  <span className="px-3 py-1 text-xs font-medium text-white rounded-full" style={{ backgroundColor: '#DAB6A2' }}>
                    BESTSELLER
                  </span>
                )}
              </div>

              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                  >
                    <Eye size={18} style={{ color: '#333333' }} />
                  </button>
                  <button 
                    className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={18} style={{ color: '#333333' }} />
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#7D6A58' }}>
                  {product.category}
                </span>
                <h3 className="font-serif text-xl font-medium mt-2 mb-1" style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}>
                  {product.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#7D6A58' }}>
                  {product.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold" style={{ color: '#333333' }}>
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm line-through" style={{ color: '#7D6A58' }}>
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  className="w-full py-3 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: '#DAB6A2' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#C59A88'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#DAB6A2'}
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            className="px-8 py-4 border-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ 
              borderColor: '#C1A875', 
              color: '#C1A875',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#C1A875';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#C1A875';
            }}
            onClick={() => navigate('/shop')}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;