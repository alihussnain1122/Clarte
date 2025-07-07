import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, SortAsc, SortDesc, ShoppingCart, Heart, Star } from 'lucide-react';

// Mock ProductCard component (replace with your actual ProductCard import)
const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite = false,
  viewMode = 'grid'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isListView = viewMode === 'list';

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${
        isListView ? 'flex flex-row' : 'flex flex-col'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-gray-50 ${
        isListView ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
      }`}>
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
          onClick={() => onToggleFavorite?.(product.id)}
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
      </div>

      {/* Content */}
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-yellow-700 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Rating Stars */}
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
            onClick={() => onAddToCart?.(product)}
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
    </div>
  );
};

const ProductGrid = ({ 
  products = [], 
  selectedCategory = 'All',
  onAddToCart,
  onToggleFavorite,
  favorites = new Set(),
  loading = false,
  error = null
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === 'price') {
        aValue = parseFloat(aValue);
        bValue = parseFloat(bValue);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [products, selectedCategory, searchTerm, sortBy, sortOrder, priceRange]);

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="aspect-square bg-gray-200 animate-pulse" />
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="h-8 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-red-500 text-2xl">⚠️</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 mb-4">
          {error}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Price Range */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Price:</span>
              <select
                value={`${priceRange[0]}-${priceRange[1]}`}
                onChange={(e) => {
                  const [min, max] = e.target.value.split('-').map(Number);
                  setPriceRange([min, max]);
                }}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="0-1000">All Prices</option>
                <option value="0-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200-1000">$200+</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
              </button>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-yellow-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-yellow-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </div>

      {/* Loading State */}
      {loading && <LoadingSkeleton />}

      {/* Products Grid/List */}
      {!loading && (
        <>
          {filteredAndSortedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([0, 1000]);
                }}
                className="px-6 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                : 'space-y-4'
              }
            `}>
              {filteredAndSortedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={favorites.has(product.id)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Demo component with sample data
const ProductGridDemo = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sampleProducts = [
    {
      id: 1,
      name: "Luxe Silk Scarf",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      price: 89.99,
      description: "Handwoven silk scarf with delicate gold threading. Perfect for elevating any outfit with timeless elegance.",
      category: "Accessories"
    },
    {
      id: 2,
      name: "Artisan Ceramic Vase",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop",
      price: 124.50,
      description: "Hand-thrown ceramic vase with soft rose clay glaze. Each piece is unique with subtle variations in texture.",
      category: "Home Decor"
    },
    {
      id: 3,
      name: "Cashmere Throw Blanket",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      price: 199.00,
      description: "Ultra-soft cashmere throw in warm ivory. Sustainably sourced and ethically made for ultimate comfort.",
      category: "Home Textiles"
    },
    {
      id: 4,
      name: "Gold Leaf Jewelry Box",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      price: 156.75,
      description: "Handcrafted wooden jewelry box with delicate gold leaf detailing. Lined with soft velvet interior.",
      category: "Storage"
    },
    {
      id: 5,
      name: "Botanical Print Set",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      price: 78.00,
      description: "Set of three vintage botanical prints on cream paper. Ready to frame for timeless wall decor.",
      category: "Art"
    },
    {
      id: 6,
      name: "Amber Glass Candle",
      image: "https://images.unsplash.com/photo-1602874801006-7d7a7fd5a24e?w=400&h=400&fit=crop",
      price: 42.99,
      description: "Hand-poured soy candle in amber glass with warm vanilla and sandalwood scent. 60-hour burn time.",
      category: "Home Fragrance"
    }
  ];

  const categories = ['All', 'Accessories', 'Home Decor', 'Home Textiles', 'Storage', 'Art', 'Home Fragrance'];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Grid Showcase
          </h1>
          
          {/* Category Filter Demo */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid
          products={sampleProducts}
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          loading={false}
          error={null}
        />
      </div>
    </div>
  );
};

export default ProductGrid;