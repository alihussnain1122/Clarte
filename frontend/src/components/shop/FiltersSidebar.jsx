import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

const FilterSidebar = ({ isOpen, onClose, onFilterChange, products = [] }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
  
  // Calculate dynamic max price for initial state
  const getMaxPrice = () => {
    if (products.length === 0) return 200;
    const maxPrice = Math.max(...products.map(p => p.price));
    return Math.ceil(maxPrice / 10) * 10; // Round up to nearest 10
  };
  
  const [priceRange, setPriceRange] = useState({ min: 0, max: getMaxPrice() });
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isSkinTypeOpen, setIsSkinTypeOpen] = useState(true);

  // Update price range when products change
  React.useEffect(() => {
    const getMaxPrice = () => {
      if (products.length === 0) return 200;
      const maxPrice = Math.max(...products.map(p => p.price));
      return Math.ceil(maxPrice / 10) * 10; // Round up to nearest 10
    };
    
    const maxPrice = getMaxPrice();
    setPriceRange(prev => ({ ...prev, max: maxPrice }));
  }, [products]);

  // Calculate actual counts from products data
  const getCategoryCount = (categoryId) => {
    return products.filter(product => product.category === categoryId).length;
  };

  const getSkinTypeCount = (skinTypeId) => {
    if (skinTypeId === 'all') {
      return products.length;
    }
    return products.filter(product => 
      product.skinTypes?.some(type => 
        type.toLowerCase().replace(/\s+/g, '-') === skinTypeId
      )
    ).length;
  };

  const categories = [
    { id: 'serums', name: 'Serums', count: getCategoryCount('serums') },
    { id: 'cleansers', name: 'Cleansers', count: getCategoryCount('cleansers') },
    { id: 'moisturizers', name: 'Moisturizers', count: getCategoryCount('moisturizers') },
    { id: 'masks', name: 'Face Masks', count: getCategoryCount('masks') },
    { id: 'toners', name: 'Toners', count: getCategoryCount('toners') },
    { id: 'treatments', name: 'Treatments', count: getCategoryCount('treatments') },
    { id: 'suncare', name: 'Sun Care', count: getCategoryCount('suncare') },
    { id: 'sunscreens', name: 'Sunscreens', count: getCategoryCount('sunscreens') }
  ].filter(category => category.count > 0); // Only show categories with products

  const skinTypes = [
    { id: 'all', name: 'All Skin Types', count: getSkinTypeCount('all') },
    { id: 'oily', name: 'Oily Skin', count: getSkinTypeCount('oily') },
    { id: 'dry', name: 'Dry Skin', count: getSkinTypeCount('dry') },
    { id: 'combination', name: 'Combination Skin', count: getSkinTypeCount('combination') },
    { id: 'sensitive', name: 'Sensitive Skin', count: getSkinTypeCount('sensitive') },
    { id: 'acne-prone', name: 'Acne-Prone', count: getSkinTypeCount('acne-prone') },
    { id: 'mature', name: 'Mature Skin', count: getSkinTypeCount('mature') },
    { id: 'normal', name: 'Normal Skin', count: getSkinTypeCount('normal') }
  ].filter(skinType => skinType.count > 0); // Only show skin types with products

  const priceRanges = [
    { id: 'under-25', label: 'Under $25', min: 0, max: 25 },
    { id: '25-50', label: '$25 - $50', min: 25, max: 50 },
    { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over-100', label: 'Over $100', min: 100, max: getMaxPrice() }
  ];

  const handleCategoryChange = (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(updatedCategories);
    updateFilters({ categories: updatedCategories });
  };

  const handleSkinTypeChange = (skinTypeId) => {
    const updatedSkinTypes = selectedSkinTypes.includes(skinTypeId)
      ? selectedSkinTypes.filter(id => id !== skinTypeId)
      : [...selectedSkinTypes, skinTypeId];
    
    setSelectedSkinTypes(updatedSkinTypes);
    updateFilters({ skinTypes: updatedSkinTypes });
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    updateFilters({ priceRange: range });
  };

  const updateFilters = (newFilters) => {
    const allFilters = {
      categories: selectedCategories,
      skinTypes: selectedSkinTypes,
      priceRange: priceRange,
      ...newFilters
    };
    
    if (onFilterChange) {
      onFilterChange(allFilters);
    }
  };

  const clearAllFilters = () => {
    const maxPrice = getMaxPrice();
    setSelectedCategories([]);
    setSelectedSkinTypes([]);
    setPriceRange({ min: 0, max: maxPrice });
    if (onFilterChange) {
      onFilterChange({ categories: [], skinTypes: [], priceRange: { min: 0, max: maxPrice } });
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 lg:w-full bg-white lg:bg-transparent z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full lg:h-auto overflow-y-auto p-6 lg:p-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center gap-2">
              <Filter size={20} style={{ color: '#C1A875' }} />
              <h2 
                className="text-xl font-semibold"
                style={{ 
                  color: '#333333', 
                  fontFamily: 'Inter, sans-serif' 
                }}
              >
                Filter Products
              </h2>
            </div>
            
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} style={{ color: '#7D6A58' }} />
            </button>
          </div>

          {/* Clear All Filters */}
          {(selectedCategories.length > 0 || selectedSkinTypes.length > 0 || priceRange.min > 0 || priceRange.max < getMaxPrice()) && (
            <div className="mb-6">
              <button
                onClick={clearAllFilters}
                className="text-sm font-medium hover:underline transition-all"
                style={{ color: '#C1A875' }}
              >
                Clear all filters ({selectedCategories.length + selectedSkinTypes.length + (priceRange.min > 0 || priceRange.max < getMaxPrice() ? 1 : 0)})
              </button>
            </div>
          )}

          {/* Category Filter Section */}
          <div className="mb-8">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full flex items-center justify-between mb-4 p-3 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors"
            >
              <span 
                className="font-medium text-left"
                style={{ 
                  color: '#333333', 
                  fontFamily: 'Inter, sans-serif' 
                }}
              >
                Filter by Category
              </span>
              {isCategoryOpen ? (
                <ChevronUp size={18} style={{ color: '#7D6A58' }} />
              ) : (
                <ChevronDown size={18} style={{ color: '#7D6A58' }} />
              )}
            </button>

            {/* Category Checkboxes */}
            {isCategoryOpen && (
              <div className="space-y-3 pl-2">
                {categories.map((category) => (
                  <label 
                    key={category.id} 
                    className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        className="sr-only"
                      />
                      <div 
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          selectedCategories.includes(category.id)
                            ? 'border-transparent'
                            : 'border-gray-300 group-hover:border-gray-400'
                        }`}
                        style={{ 
                          backgroundColor: selectedCategories.includes(category.id) ? '#C1A875' : 'white'
                        }}
                      >
                        {selectedCategories.includes(category.id) && (
                          <svg 
                            className="w-3 h-3 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span 
                        className="text-sm font-medium"
                        style={{ 
                          color: selectedCategories.includes(category.id) ? '#333333' : '#7D6A58',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {category.name}
                      </span>
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ 
                          backgroundColor: '#F9F6F1',
                          color: '#7D6A58',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {category.count}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range Filter Section */}
          <div className="mb-8">
            <button
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="w-full flex items-center justify-between mb-4 p-3 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors"
            >
              <span 
                className="font-medium text-left"
                style={{ 
                  color: '#333333', 
                  fontFamily: 'Inter, sans-serif' 
                }}
              >
                Price Range
              </span>
              {isPriceOpen ? (
                <ChevronUp size={18} style={{ color: '#7D6A58' }} />
              ) : (
                <ChevronDown size={18} style={{ color: '#7D6A58' }} />
              )}
            </button>

            {/* Price Range Options */}
            {isPriceOpen && (
              <div className="space-y-3 pl-2">
                {/* Custom Range Slider */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium" style={{ color: '#333333' }}>
                      Custom Range
                    </span>
                    <span className="text-sm" style={{ color: '#7D6A58' }}>
                      ${priceRange.min} - ${priceRange.max}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => handlePriceRangeChange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                      className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      style={{ '--tw-ring-color': '#C1A875' }}
                      min="0"
                      placeholder="Min"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => handlePriceRangeChange({ ...priceRange, max: parseInt(e.target.value) || getMaxPrice() })}
                      className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      style={{ '--tw-ring-color': '#C1A875' }}
                      min="0"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Predefined Price Ranges */}
                {priceRanges.map((range) => (
                  <label 
                    key={range.id} 
                    className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={priceRange.min === range.min && priceRange.max === range.max}
                        onChange={() => handlePriceRangeChange({ min: range.min, max: range.max })}
                        className="sr-only"
                      />
                      <div 
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          priceRange.min === range.min && priceRange.max === range.max
                            ? 'border-transparent'
                            : 'border-gray-300 group-hover:border-gray-400'
                        }`}
                        style={{ 
                          backgroundColor: priceRange.min === range.min && priceRange.max === range.max ? '#C1A875' : 'white'
                        }}
                      >
                        {priceRange.min === range.min && priceRange.max === range.max && (
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: 'white' }}
                          />
                        )}
                      </div>
                    </div>
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        color: priceRange.min === range.min && priceRange.max === range.max ? '#333333' : '#7D6A58',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Skin Type Filter Section */}
          <div className="mb-8">
            <button
              onClick={() => setIsSkinTypeOpen(!isSkinTypeOpen)}
              className="w-full flex items-center justify-between mb-4 p-3 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors"
            >
              <span 
                className="font-medium text-left"
                style={{ 
                  color: '#333333', 
                  fontFamily: 'Inter, sans-serif' 
                }}
              >
                Skin Type
              </span>
              {isSkinTypeOpen ? (
                <ChevronUp size={18} style={{ color: '#7D6A58' }} />
              ) : (
                <ChevronDown size={18} style={{ color: '#7D6A58' }} />
              )}
            </button>

            {/* Skin Type Checkboxes */}
            {isSkinTypeOpen && (
              <div className="space-y-3 pl-2">
                {skinTypes.map((skinType) => (
                  <label 
                    key={skinType.id} 
                    className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedSkinTypes.includes(skinType.id)}
                        onChange={() => handleSkinTypeChange(skinType.id)}
                        className="sr-only"
                      />
                      <div 
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          selectedSkinTypes.includes(skinType.id)
                            ? 'border-transparent'
                            : 'border-gray-300 group-hover:border-gray-400'
                        }`}
                        style={{ 
                          backgroundColor: selectedSkinTypes.includes(skinType.id) ? '#C1A875' : 'white'
                        }}
                      >
                        {selectedSkinTypes.includes(skinType.id) && (
                          <svg 
                            className="w-3 h-3 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span 
                        className="text-sm font-medium"
                        style={{ 
                          color: selectedSkinTypes.includes(skinType.id) ? '#333333' : '#7D6A58',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {skinType.name}
                      </span>
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ 
                          backgroundColor: '#F9F6F1',
                          color: '#7D6A58',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {skinType.count}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;