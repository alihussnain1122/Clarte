import React, { useState, useEffect } from 'react';
import { Star, Heart, Filter, Grid, List } from 'lucide-react';
import FilterSidebar from './FiltersSidebar';
import { productService } from '/src/services/productService';

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [_activeFilters, setActiveFilters] = useState({
    categories: [],
    skinTypes: [],
    priceRange: { min: 0, max: 200 }
  });

  // Fetch products on mount
  useEffect(() => {
    productService.getAllProducts()
      .then(res => {
        const products = res.data.products || res.data; // for pagination or raw list
        setOriginalProducts(products);
        setFilteredProducts(products);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        // Fallback to mock data for development
        const mockProducts = [
          {
            id: 1,
            name: "Vitamin C Serum",
            description: "Brightening serum with vitamin C for radiant skin",
            price: 45.99,
            originalPrice: 55.99,
            rating: 4.5,
            reviews: 128,
            image: "/api/placeholder/300/300",
            category: "serums",
            skinTypes: ["all", "oily", "combination"]
          },
          {
            id: 2,
            name: "Gentle Cleanser",
            description: "Mild cleanser for sensitive skin",
            price: 28.99,
            originalPrice: 35.99,
            rating: 4.3,
            reviews: 95,
            image: "/api/placeholder/300/300",
            category: "cleansers",
            skinTypes: ["sensitive", "dry", "normal"]
          },
          {
            id: 3,
            name: "Hydrating Moisturizer",
            description: "Rich moisturizer for dry skin",
            price: 52.99,
            originalPrice: 62.99,
            rating: 4.7,
            reviews: 203,
            image: "/api/placeholder/300/300",
            category: "moisturizers",
            skinTypes: ["dry", "mature", "normal"]
          }
        ];
        setOriginalProducts(mockProducts);
        setFilteredProducts(mockProducts);
      });
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);

    let filtered = [...originalProducts];

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.skinTypes.length > 0) {
      filtered = filtered.filter(product =>
        product.skinTypes?.some(type =>
          filters.skinTypes.includes(type.toLowerCase().replace(/\s+/g, '-'))
        )
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
      );
    }

    setFilteredProducts(filtered);
  };

  // Handle sort changes
  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
    let sorted = [...filteredProducts];

    switch (sortValue) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        break;
      default:
        // featured - keep original order
        break;
    }

    setFilteredProducts(sorted);
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 transition-all duration-300 flex items-center justify-center hover:bg-white hover:text-red-500">
          <Heart size={18} className="transition-all duration-300" />
        </button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/20 capitalize">
            {product.category}
          </span>
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-medium text-gray-800 hover:bg-white transition-all duration-300">
            Quick View
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
          className="text-lg font-semibold mb-2 line-clamp-2"
          style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
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

        {/* Add to Cart Button */}
        <button 
          className="w-full py-3 px-4 rounded-xl font-medium transition-all hover:shadow-md hover:bg-opacity-90"
          style={{ 
            backgroundColor: '#C1A875', 
            color: 'white' 
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsFilterOpen(false)} />
      )}

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Filter Sidebar */}
        <div className={`
          lg:w-80 flex-shrink-0
          ${isFilterOpen ? 'fixed inset-y-0 left-0 z-50 w-80 lg:relative lg:inset-auto lg:z-auto' : 'hidden lg:block'}
        `}>
          <div className="lg:sticky lg:top-8">
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              onFilterChange={handleFilterChange}
              products={originalProducts}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
            >
              <Filter size={20} style={{ color: '#C1A875' }} />
              <span style={{ color: '#333333' }}>Filters</span>
            </button>

            {/* Results Count */}
            <div className="flex items-center gap-4">
              <span 
                className="text-sm"
                style={{ color: '#7D6A58' }}
              >
                {filteredProducts.length} Products Found
              </span>
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <Grid size={16} style={{ color: viewMode === 'grid' ? '#C1A875' : '#7D6A58' }} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List size={16} style={{ color: viewMode === 'list' ? '#C1A875' : '#7D6A58' }} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  color: '#333333',
                  '--tw-ring-color': '#C1A875'
                }}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
                : "flex flex-col gap-6"
            }>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4">
                <Filter size={48} className="mx-auto text-gray-300" />
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: '#333333' }}
              >
                No products found
              </h3>
              <p 
                className="text-gray-600 mb-4"
                style={{ color: '#7D6A58' }}
              >
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => handleFilterChange({ categories: [], skinTypes: [], priceRange: { min: 0, max: 200 } })}
                className="px-6 py-3 rounded-xl font-medium transition-all hover:bg-opacity-90"
                style={{ 
                  backgroundColor: '#C1A875', 
                  color: 'white' 
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;