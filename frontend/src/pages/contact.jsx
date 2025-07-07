import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Heart, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFBF7' }}>
      {/* Header Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl" style={{ backgroundColor: 'rgba(193, 168, 117, 0.1)' }}></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(249, 246, 241, 0.9)', border: '1px solid rgba(193, 168, 117, 0.3)' }}>
            <MessageCircle style={{ color: '#C1A875' }} size={16} />
            <span className="text-sm font-medium" style={{ color: '#7D6A58' }}>Connect With Us</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#333333' }}>
            Get in <span style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Touch</span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#7D6A58' }}>
            We'd love to hear from you. Whether you have questions about our products, 
            need skincare advice, or just want to say hello — we're here for you.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#333333' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <Send style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  Send us a Message
                </h2>
                
                <p className="text-lg mb-8" style={{ color: '#7D6A58' }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: '#F9F6F1',
                        borderColor: 'rgba(193, 168, 117, 0.3)',
                        color: '#333333'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#C1A875';
                        e.target.style.boxShadow = '0 0 0 2px rgba(193, 168, 117, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(193, 168, 117, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: '#F9F6F1',
                        borderColor: 'rgba(193, 168, 117, 0.3)',
                        color: '#333333'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#C1A875';
                        e.target.style.boxShadow = '0 0 0 2px rgba(193, 168, 117, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(193, 168, 117, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: '#F9F6F1',
                      borderColor: 'rgba(193, 168, 117, 0.3)',
                      color: '#333333'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#C1A875';
                      e.target.style.boxShadow = '0 0 0 2px rgba(193, 168, 117, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(193, 168, 117, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                    style={{ 
                      backgroundColor: '#F9F6F1',
                      borderColor: 'rgba(193, 168, 117, 0.3)',
                      color: '#333333'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#C1A875';
                      e.target.style.boxShadow = '0 0 0 2px rgba(193, 168, 117, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(193, 168, 117, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#333333' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <MessageCircle style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  Contact Information
                </h2>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <Mail style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Email Us</h3>
                    <p style={{ color: '#7D6A58' }} className="mb-2">
                      We typically respond within 24 hours
                    </p>
                    <a href="mailto:hello@clarte.com" className="font-medium hover:underline transition-colors" style={{ color: '#C1A875' }}>
                      hello@clarte.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <Phone style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Call Us</h3>
                    <p style={{ color: '#7D6A58' }} className="mb-2">
                      Monday to Friday, 9 AM - 6 PM EST
                    </p>
                    <a href="tel:+1-800-CLARTE" className="font-medium hover:underline transition-colors" style={{ color: '#C1A875' }}>
                      +1 (800) CLARTE
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <MapPin style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Visit Us</h3>
                    <p style={{ color: '#7D6A58' }} className="mb-2">
                      Our beautiful flagship store & lab
                    </p>
                    <address className="not-italic" style={{ color: '#7D6A58' }}>
                      123 Luxury Lane<br />
                      Beverly Hills, CA 90210<br />
                      United States
                    </address>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                    <Clock style={{ color: '#F9F6F1' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Business Hours</h3>
                    <div className="space-y-1 text-sm" style={{ color: '#7D6A58' }}>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(249, 246, 241, 0.5)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Find Our Store</h2>
            <p className="text-lg" style={{ color: '#7D6A58' }}>
              Visit us in person for personalized skincare consultations and product trials
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>
            <div className="w-full h-96 bg-gradient-to-br flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(193, 168, 117, 0.1), rgba(218, 182, 162, 0.1))' }}>
              <div className="text-center">
                <MapPin style={{ color: '#C1A875' }} size={48} className="mx-auto mb-4" />
                <p className="text-lg font-medium" style={{ color: '#333333' }}>Interactive Map</p>
                <p style={{ color: '#7D6A58' }}>123 Luxury Lane, Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', borderTop: '1px solid rgba(193, 168, 117, 0.2)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
            <Heart style={{ color: '#F9F6F1' }} size={32} />
          </div>
          
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
            We're Here for You
          </h2>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#7D6A58' }}>
            Whether you're starting your skincare journey or looking to enhance your routine, 
            our experts are ready to help you achieve your best skin ever.
          </p>
          
          <div className="flex items-center justify-center gap-2" style={{ color: '#7D6A58' }}>
            <Sparkles size={20} />
            <span className="text-sm">Response time: Usually within 24 hours</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;