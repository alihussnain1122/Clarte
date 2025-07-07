import React from 'react';
import { Leaf, Heart, Award, CheckCircle, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFBF7' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl" style={{ backgroundColor: 'rgba(193, 168, 117, 0.1)' }}></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(249, 246, 241, 0.9)', border: '1px solid rgba(193, 168, 117, 0.3)' }}>
            <Sparkles style={{ color: '#C1A875' }} size={16} />
            <span className="text-sm font-medium" style={{ color: '#7D6A58' }}>Luxury Skincare Redefined</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#333333' }}>
            Welcome to <span style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Clarté</span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#7D6A58' }}>
            Where science meets serenity, and every product is crafted with intention, 
            purity, and love for your skin's natural radiance.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#333333' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <Heart style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  Our Story
                </h2>
                
                <div className="space-y-6 leading-relaxed" style={{ color: '#7D6A58' }}>
                  <p className="text-lg">
                    Clarté was born from a simple belief: that skincare should be a ritual of 
                    self-care, not a compromise between effectiveness and gentleness.
                  </p>
                  
                  <p>
                    Founded by a team of passionate dermatologists and botanical experts, we noticed 
                    that luxury skincare often came with harsh chemicals, while natural products 
                    lacked scientific backing. We set out to bridge this gap.
                  </p>
                  
                  <p>
                    Every Clarté product is the result of years of research, combining time-tested 
                    botanical ingredients with cutting-edge skincare science. We believe that true 
                    beauty comes from healthy, nourished skin – and that's exactly what we deliver.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ backgroundColor: 'rgba(193, 168, 117, 0.2)' }}></div>
              <div className="relative rounded-3xl shadow-xl p-8" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=600&fit=crop" 
                  alt="Clarté founders in lab" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <blockquote className="text-center">
                  <p className="italic mb-4" style={{ color: '#333333' }}>
                    "We believe skincare should be a daily act of self-love, not a chore."
                  </p>
                  <footer className="text-sm" style={{ color: '#7D6A58' }}>
                    — Dr. Sarah Chen, Founder & Chief Formulator
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ingredients Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(249, 246, 241, 0.5)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3" style={{ color: '#333333' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <Leaf style={{ color: '#F9F6F1' }} size={24} />
              </div>
              Our Ingredients
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#7D6A58' }}>
              We source the finest botanical ingredients from around the world, 
              combining them with proven scientific actives for maximum efficacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Purity */}
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <CheckCircle style={{ color: '#F9F6F1' }} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>100% Pure</h3>
              <p className="leading-relaxed" style={{ color: '#7D6A58' }}>
                No parabens, sulfates, or synthetic fragrances. Every ingredient is carefully 
                selected for its purity and skin-loving properties.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <Leaf style={{ color: '#F9F6F1' }} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>Sustainably Sourced</h3>
              <p className="leading-relaxed" style={{ color: '#7D6A58' }}>
                We partner with ethical suppliers who share our commitment to environmental 
                responsibility and fair trade practices.
              </p>
            </div>

            {/* Care */}
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <Heart style={{ color: '#F9F6F1' }} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>Crafted with Care</h3>
              <p className="leading-relaxed" style={{ color: '#7D6A58' }}>
                Each product is made in small batches with meticulous attention to detail, 
                ensuring freshness and potency in every jar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clarté Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform -rotate-3" style={{ backgroundColor: 'rgba(218, 182, 162, 0.2)' }}></div>
              <div className="relative rounded-3xl shadow-xl overflow-hidden" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&h=400&fit=crop" 
                  alt="Clarté laboratory" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award style={{ color: '#C1A875' }} size={24} />
                    <span className="text-lg font-semibold" style={{ color: '#333333' }}>Award-Winning Research</span>
                  </div>
                  <p style={{ color: '#7D6A58' }}>
                    Our formulations have been recognized by leading dermatological associations 
                    for their innovation and effectiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: '#333333' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <Award style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  Why Clarté?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                      <CheckCircle style={{ color: '#F9F6F1' }} size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#333333' }}>Science-Backed Formulas</h3>
                      <p style={{ color: '#7D6A58' }}>Every product is clinically tested and dermatologist-approved for maximum safety and efficacy.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                      <CheckCircle style={{ color: '#F9F6F1' }} size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#333333' }}>Gentle Yet Effective</h3>
                      <p style={{ color: '#7D6A58' }}>Powerful results without irritation, suitable for even the most sensitive skin types.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                      <CheckCircle style={{ color: '#F9F6F1' }} size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#333333' }}>Trusted by Professionals</h3>
                      <p style={{ color: '#7D6A58' }}>Recommended by dermatologists, estheticians, and skincare professionals worldwide.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                      <CheckCircle style={{ color: '#F9F6F1' }} size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#333333' }}>Sustainable & Ethical</h3>
                      <p style={{ color: '#7D6A58' }}>Cruelty-free, eco-friendly packaging, and committed to making a positive impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Quote Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', borderTop: '1px solid rgba(193, 168, 117, 0.2)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
              <Sparkles style={{ color: '#F9F6F1' }} size={32} />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed" style={{ color: '#333333' }}>
              "Skincare isn't vanity — it's serenity."
            </blockquote>
            
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#7D6A58' }}>
              Join thousands of satisfied customers who have made Clarté part of their daily 
              self-care ritual. Your skin deserves the very best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ 
                  background: 'linear-gradient(to right, #C1A875, #DAB6A2)',
                  color: '#F9F6F1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #B5966B, #CE9F8C)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #C1A875, #DAB6A2)';
                }}
              >
                Discover Our Products
              </button>
              <button 
                className="px-8 py-4 font-semibold rounded-full transition-colors duration-300"
                style={{ 
                  backgroundColor: '#F9F6F1',
                  color: '#C1A875',
                  border: '2px solid rgba(193, 168, 117, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(193, 168, 117, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#F9F6F1';
                }}
              >
                Read Our Story
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12" style={{ borderTop: '1px solid rgba(193, 168, 117, 0.2)' }}>
            <div className="flex items-center gap-2" style={{ color: '#7D6A58' }}>
              <Users size={20} />
              <span className="text-sm">50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#7D6A58' }}>
              <Award size={20} />
              <span className="text-sm">Dermatologist Approved</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#7D6A58' }}>
              <Leaf size={20} />
              <span className="text-sm">100% Natural & Organic</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#7D6A58' }}>
              <Heart size={20} />
              <span className="text-sm">Cruelty-Free</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;