import React from 'react';
import { Sparkles, Leaf } from 'lucide-react';

const ClarteHeader = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9F6F1' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Elements */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <Leaf size={24} style={{ color: '#C1A875' }} />
            <div className="w-12 h-px" style={{ backgroundColor: '#C1A875' }}></div>
            <Sparkles size={20} style={{ color: '#DAB6A2' }} />
            <div className="w-12 h-px" style={{ backgroundColor: '#C1A875' }}></div>
            <Leaf size={24} style={{ color: '#C1A875' }} />
          </div>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
          style={{ 
            color: '#333333', 
            fontFamily: 'Playfair Display, serif'
          }}
        >
          Our Collection
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto"
          style={{ 
            color: '#7D6A58', 
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Curated skincare crafted for glow.
        </p>

        {/* Secondary Description */}
        <p 
          className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-80"
          style={{ 
            color: '#7D6A58', 
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Discover our carefully selected range of premium natural skincare products, 
          each formulated with the finest ingredients to reveal your skin's natural radiance.
        </p>

        {/* Decorative Bottom Elements */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px" style={{ backgroundColor: '#C1A875' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#DAB6A2' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
            <div className="w-8 h-px" style={{ backgroundColor: '#C1A875' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClarteHeader;