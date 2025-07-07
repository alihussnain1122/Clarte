import React, { useState } from 'react';
import { Mail, Gift, Sparkles, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    "Exclusive 10% discount on first order",
    "Early access to new product launches",
    "Expert skincare tips & tutorials",
    "Special member-only offers"
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9F6F1' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div 
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#C1A875' }}
            >
              <Check size={40} className="text-white" />
            </div>
            <h2 
              className="text-3xl font-serif font-bold mb-4" 
              style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
            >
              Welcome to the Clarté Family! 🌿
            </h2>
            <p 
              className="text-lg mb-6" 
              style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
            >
              Thank you for subscribing! Check your email for your exclusive 10% discount code.
            </p>
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
              style={{ backgroundColor: '#DAB6A2' }}
            >
              <Gift size={20} />
              Discount code sent to your email!
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9F6F1' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={24} style={{ color: '#C1A875' }} />
                  <span 
                    className="text-sm font-medium uppercase tracking-wider"
                    style={{ color: '#C1A875', fontFamily: 'Inter, sans-serif' }}
                  >
                    Exclusive Offer
                  </span>
                </div>
                <h2 
                  className="text-3xl lg:text-4xl font-serif font-bold mb-4" 
                  style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
                >
                  Get 10% Off Your First Order
                </h2>
                <p 
                  className="text-lg leading-relaxed mb-6" 
                  style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
                >
                  Join thousands of satisfied customers and discover the secret to naturally radiant skin. 
                  Plus, be the first to know about new launches and exclusive offers.
                </p>
              </div>

              {/* Benefits List */}
              <div className="mb-8">
                <h3 
                  className="text-lg font-semibold mb-4" 
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                >
                  What you'll receive:
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#C1A875' }}
                      >
                        <Check size={12} className="text-white" />
                      </div>
                      <span 
                        className="text-sm" 
                        style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="space-y-4">
                <div className="relative">
                  <Mail 
                    size={20} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                    style={{ color: '#7D6A58' }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      borderColor: email ? '#C1A875' : '#E5E7EB'
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && email && !isLoading && handleSubmit(e)}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
                  className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isLoading || !email ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg transform hover:scale-105'
                  }`}
                  style={{ 
                    backgroundColor: '#DAB6A2',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onMouseEnter={(e) => !isLoading && email && (e.target.style.backgroundColor = '#C59A88')}
                  onMouseLeave={(e) => !isLoading && email && (e.target.style.backgroundColor = '#DAB6A2')}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Gift size={20} />
                      Claim My 10% Discount
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <p 
                className="text-xs mt-4 text-center" 
                style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
              >
                We respect your privacy. Unsubscribe at any time. 
                <br />
                No spam, only skincare love. ✨
              </p>
            </div>

            {/* Right Side - Visual */}
            <div 
              className="relative p-8 lg:p-12 flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #F9F6F1 0%, #DAB6A2 100%)'
              }}
            >
              <div className="text-center">
                {/* Decorative Elements */}
                <div className="relative">
                  <div 
                    className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#C1A875' }}
                    >
                      <Gift size={40} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce" style={{ backgroundColor: '#C1A875', animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full animate-bounce" style={{ backgroundColor: '#DAB6A2', animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#F9F6F1', animationDelay: '1.5s' }}></div>
                </div>

                <h3 
                  className="text-2xl font-serif font-bold mb-4" 
                  style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
                >
                  Save 10% Today
                </h3>
                <p 
                  className="text-lg leading-relaxed" 
                  style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
                >
                  Limited time offer for new subscribers. Join our premium skincare community and unlock exclusive benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
              <span className="text-xs" style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
                50,000+ Subscribers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
              <span className="text-xs" style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
                Trusted Since 2022
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
              <span className="text-xs" style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
                No Spam Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;