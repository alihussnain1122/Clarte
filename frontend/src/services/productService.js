const API_URL = 'http://localhost:5000/api/products';

export const productService = {
  // Get all products with filters and pagination
  getAllProducts: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${API_URL}?${queryString}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get single product by ID
  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Search products
  searchProducts: async (query, limit = 10) => {
    try {
      const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to search products');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  // Get featured products
  getFeaturedProducts: async (limit = 6) => {
    try {
      const response = await fetch(`${API_URL}/featured?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch featured products');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }
  },

  // Get new products
  getNewProducts: async (limit = 6) => {
    try {
      const response = await fetch(`${API_URL}/new?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch new products');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching new products:', error);
      throw error;
    }
  },

  // Get products by category
  getProductsByCategory: async (category, limit = 8) => {
    try {
      const response = await fetch(`${API_URL}/category/${category}?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products by category');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  },

  // Get filter options
  getFilterOptions: async () => {
    try {
      const response = await fetch(`${API_URL}/filters`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch filter options');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching filter options:', error);
      throw error;
    }
  },

  // Admin functions (you'll need to add authentication headers)
  createProduct: async (productData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header when you implement auth
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header when you implement auth
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          // Add authorization header when you implement auth
          // 'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};
