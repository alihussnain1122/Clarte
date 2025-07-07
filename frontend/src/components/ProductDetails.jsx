import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { productService } from '/src/services/productService';
import { useCart } from '/src/contexts/CartContext';
import { useToast } from '/src/contexts/ToastContext';
import { useFavorites } from '/src/contexts/FavoritesContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, getCartItem, updateQuantity } = useCart();
  const { showSuccess } = useToast();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await productService.getProductById(id);
        setProduct(response.data || response);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
        
        // Fallback to mock data for development
        const mockProduct = {
          id: parseInt(id),
          name: "Vitamin C Serum",
          description: "Brightening serum with vitamin C for radiant skin. This powerful formula contains 20% vitamin C, hyaluronic acid, and vitamin E to brighten, hydrate, and protect your skin. Perfect for daily use to achieve that healthy, glowing complexion.",
          price: 45.99,
          originalPrice: 55.99,
          rating: 4.5,
          reviews: 128,
          images: [
            "/api/placeholder/600/600",
            "/api/placeholder/600/600",
            "/api/placeholder/600/600"
          ],
          category: "serums",
          skinTypes: ["all", "oily", "combination"],
          ingredients: ["Vitamin C", "Hyaluronic Acid", "Vitamin E", "Niacinamide"],
          benefits: ["Brightens skin", "Reduces dark spots", "Hydrates", "Anti-aging"],
          usage: "Apply 2-3 drops to clean skin morning and evening. Follow with moisturizer and sunscreen.",
          inStock: true,
          stockQuantity: 50
        };
        setProduct(mockProduct);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = getCartItem(product.id);
      if (cartItem) {
        updateQuantity(product.id, cartItem.quantity + quantity);
      } else {
        addToCart({ ...product, quantity });
      }
      
      // Show success message
      showSuccess(`Added ${quantity} ${product.name} to cart!`);
    }
  };

  const handleToggleFavorite = () => {
    if (product) {
      toggleFavorite(product);
      const isCurrentlyFavorite = isFavorite(product.id);
      showSuccess(
        isCurrentlyFavorite 
          ? `Removed ${product.name} from favorites!`
          : `Added ${product.name} to favorites!`
      );
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= (product?.stockQuantity || 99)) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#C1A875' }}></div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-4">Sorry, we couldn't find the product you're looking for.</p>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 rounded-xl font-medium"
            style={{ backgroundColor: '#C1A875', color: 'white' }}
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Shop</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
              <img
                src={product?.images?.[selectedImage] || product?.image || "/api/placeholder/600/600"}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product?.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-[#C1A875]' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 capitalize">
                {product?.category}
              </span>
              {product?.inStock ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  In Stock
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold" style={{ color: '#333333' }}>
              {product?.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product?.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-lg font-medium" style={{ color: '#333333' }}>
                {product?.rating}
              </span>
              <span className="text-gray-600">
                ({product?.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold" style={{ color: '#C1A875' }}>
                ${product?.price}
              </span>
              {product?.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product?.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed" style={{ color: '#7D6A58' }}>
              {product?.description}
            </p>

            {/* Skin Types */}
            {product?.skinTypes && (
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#333333' }}>
                  Suitable for:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinTypes.map((type, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize"
                      style={{ color: '#7D6A58' }}
                    >
                      {type.replace('-', ' ')} skin
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold" style={{ color: '#333333' }}>
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= (product?.stockQuantity || 99)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product?.inStock}
                  className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium text-white transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#C1A875' }}
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                
                <button 
                  onClick={handleToggleFavorite}
                  className={`p-4 border transition-colors rounded-xl ${
                    product && isFavorite(product.id)
                      ? 'border-red-300 bg-red-50 text-red-500 hover:bg-red-100'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Heart 
                    size={20} 
                    className={product && isFavorite(product.id) ? 'fill-current' : ''} 
                  />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            {product?.ingredients && (
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#333333' }}>
                  Key Ingredients:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product?.benefits && (
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#333333' }}>
                  Benefits:
                </h3>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C1A875' }}></span>
                      <span style={{ color: '#7D6A58' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product?.usage && (
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#333333' }}>
                  How to Use:
                </h3>
                <p style={{ color: '#7D6A58' }}>{product.usage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
