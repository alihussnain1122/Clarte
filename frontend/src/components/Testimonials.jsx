import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108755-2616c7d4b3cb?w=120&h=120&fit=crop&crop=face",
      rating: 5,
      review: "Clarté's Radiance Serum has completely transformed my skin! My dark spots have faded and my complexion looks so much brighter. The natural ingredients make me feel confident about what I'm putting on my skin.",
      product: "Radiance Renewal Serum"
    },
    {
      id: 2,
      name: "Aisha Khan",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      rating: 5,
      review: "I've been using Clarté products for 6 months now and I'm absolutely amazed! My sensitive skin has never felt better. The gentle cleansing balm is a game-changer for my nighttime routine.",
      product: "Gentle Cleansing Balm"
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      rating: 5,
      review: "The packaging is beautiful and eco-friendly, which I love! But more importantly, the Rose Mist has become my holy grail product. It keeps my skin hydrated all day long.",
      product: "Hydrating Rose Mist"
    },
    {
      id: 4,
      name: "Rhea Malhotra",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
      rating: 5,
      review: "As someone who's tried countless skincare brands, Clarté stands out for its authenticity. The night cream is luxurious and my skin feels so nourished every morning. Highly recommend!",
      product: "Luxe Night Cream"
    },
    {
      id: 5,
      name: "Kavya Reddy",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face",
      rating: 5,
      review: "Finally, a brand that cares about both effectiveness and ethics! My skin has never looked better, and I love that it's cruelty-free. Clarté has earned a customer for life.",
      product: "Complete Skincare Routine"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FCFBF7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-serif font-bold mb-4" 
            style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
          >
            What Our Customers Say
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#C1A875' }}></div>
          <p 
            className="text-lg max-w-2xl mx-auto" 
            style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
          >
            Real stories from real people who've experienced the Clarté difference
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 opacity-20">
            <Quote size={48} style={{ color: '#C1A875' }} />
          </div>

          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Review Text */}
            <blockquote 
              className="text-xl md:text-2xl leading-relaxed mb-8 font-light italic"
              style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
            >
              "{testimonials[currentIndex].review}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2"
                style={{ borderColor: '#C1A875' }}
              />
              <div className="text-center md:text-left">
                <h4 
                  className="text-lg font-semibold" 
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                >
                  {testimonials[currentIndex].name}
                </h4>
                <p 
                  className="text-sm mb-1" 
                  style={{ color: '#7D6A58' }}
                >
                  {testimonials[currentIndex].location}
                </p>
                <p 
                  className="text-xs font-medium" 
                  style={{ color: '#C1A875' }}
                >
                  Verified Purchase: {testimonials[currentIndex].product}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            style={{ color: '#C1A875' }}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            style={{ color: '#C1A875' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'scale-125' : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: index === currentIndex ? '#C1A875' : '#DAB6A2',
                opacity: index === currentIndex ? 1 : 0.5
              }}
            />
          ))}
        </div>

        {/* Additional Testimonials Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h5 
                    className="font-semibold text-sm" 
                    style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                  >
                    {testimonial.name}
                  </h5>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p 
                className="text-sm leading-relaxed" 
                style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.review.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div 
              className="text-3xl font-bold mb-2" 
              style={{ color: '#C1A875', fontFamily: 'Playfair Display, serif' }}
            >
              50,000+
            </div>
            <p style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
              Happy Customers
            </p>
          </div>
          <div>
            <div 
              className="text-3xl font-bold mb-2" 
              style={{ color: '#C1A875', fontFamily: 'Playfair Display, serif' }}
            >
              4.8★
            </div>
            <p style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
              Average Rating
            </p>
          </div>
          <div>
            <div 
              className="text-3xl font-bold mb-2" 
              style={{ color: '#C1A875', fontFamily: 'Playfair Display, serif' }}
            >
              98%
            </div>
            <p style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
              Satisfaction Rate
            </p>
          </div>
          <div>
            <div 
              className="text-3xl font-bold mb-2" 
              style={{ color: '#C1A875', fontFamily: 'Playfair Display, serif' }}
            >
              3 Years
            </div>
            <p style={{ color: '#7D6A58', fontFamily: 'Inter, sans-serif' }}>
              Trusted Since
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;