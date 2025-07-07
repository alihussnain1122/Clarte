import React from 'react';
import { Leaf, Heart, FlaskConical, Recycle, Shield, Award } from 'lucide-react';

const BrandPromise = () => {
  const promises = [
    {
      id: 1,
      icon: <Leaf size={32} />,
      title: "100% Natural Ingredients",
      description: "Sourced from nature's finest botanicals, free from harmful chemicals and synthetic additives.",
      color: "#C1A875"
    },
    {
      id: 2,
      icon: <Heart size={32} />,
      title: "Cruelty-Free",
      description: "Never tested on animals. We believe in ethical beauty that respects all living beings.",
      color: "#DAB6A2"
    },
    {
      id: 3,
      icon: <FlaskConical size={32} />,
      title: "Dermatologist Tested",
      description: "Clinically proven formulations tested by skin experts for safety and effectiveness.",
      color: "#C1A875"
    },
    {
      id: 4,
      icon: <Recycle size={32} />,
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging made from recycled materials to protect our planet.",
      color: "#DAB6A2"
    }
  ];

  const certifications = [
    {
      icon: <Shield size={24} />,
      text: "FDA Approved"
    },
    {
      icon: <Award size={24} />,
      text: "Organic Certified"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9F6F1' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-serif font-bold mb-4" 
            style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Clarté?
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#C1A875' }}></div>
          <p 
            className="text-lg max-w-3xl mx-auto leading-relaxed" 
            style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
          >
            Our commitment to quality, ethics, and sustainability makes us your trusted partner in natural skincare
          </p>
        </div>

        {/* Main Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {promises.map((promise, index) => (
            <div 
              key={promise.id}
              className="group text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Icon Container */}
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundColor: promise.color + '15',
                  border: `2px solid ${promise.color}30`
                }}
              >
                <div style={{ color: promise.color }}>
                  {promise.icon}
                </div>
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-serif font-semibold mb-4" 
                style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
              >
                {promise.title}
              </h3>
              <p 
                className="text-sm leading-relaxed" 
                style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
              >
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 
                className="text-2xl font-serif font-semibold mb-2" 
                style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
              >
                Trusted by Thousands
              </h3>
              <p style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
                Join over 50,000+ satisfied customers who trust Clarté for their skincare needs
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div style={{ color: '#C1A875' }}>
                    {cert.icon}
                  </div>
                  <span 
                    className="font-medium text-sm" 
                    style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                  >
                    {cert.text}
                  </span>
                </div>
              ))}
              
              {/* Customer Rating */}
              <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span 
                  className="font-medium text-sm" 
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                >
                  4.8/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ 
              backgroundColor: '#DAB6A2',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#C59A88'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#DAB6A2'}
          >
            Shop Our Products
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default BrandPromise;