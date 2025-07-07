import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Serums', href: '#' },
      { name: 'Cleansers', href: '#' },
      { name: 'Moisturizers', href: '#' },
      { name: 'Gift Sets', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Ingredients', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Reviews', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Track Order', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#', color: '#E4405F' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#', color: '#1877F2' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#', color: '#1DA1F2' },
    { name: 'YouTube', icon: <Youtube size={20} />, href: '#', color: '#FF0000' }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: 'hello@clarteskincare.com', href: 'mailto:hello@clarteskincare.com' },
    { icon: <Phone size={16} />, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <MapPin size={16} />, text: 'Mumbai, Maharashtra, India', href: '#' }
  ];

  return (
    <footer style={{ backgroundColor: '#333333' }}>
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 
                  className="text-3xl font-serif font-bold mb-4" 
                  style={{ color: '#C1A875', fontFamily: 'Playfair Display, serif' }}
                >
                  Clarté
                </h2>
                <p 
                  className="text-sm leading-relaxed mb-6 max-w-md" 
                  style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                >
                  Discover the power of natural skincare with our premium collection of 
                  ethically sourced, dermatologist-tested products. Your journey to radiant, 
                  healthy skin starts here.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity duration-300"
                    style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                  >
                    <div style={{ color: '#C1A875' }}>
                      {contact.icon}
                    </div>
                    {contact.text}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-opacity-100"
                    style={{ 
                      borderColor: '#7D6A58',
                      color: '#F9F6F1'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = social.color;
                      e.target.style.color = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#7D6A58';
                      e.target.style.color = '#F9F6F1';
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 
                className="text-lg font-semibold mb-6" 
                style={{ color: '#C1A875', fontFamily: 'Inter, sans-serif' }}
              >
                Shop
              </h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 
                className="text-lg font-semibold mb-6" 
                style={{ color: '#C1A875', fontFamily: 'Inter, sans-serif' }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 
                className="text-lg font-semibold mb-6" 
                style={{ color: '#C1A875', fontFamily: 'Inter, sans-serif' }}
              >
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup (Mini) */}
          <div className="mt-12 pt-8 border-t border-gray-600">
            <div className="text-center max-w-md mx-auto">
              <h4 
                className="text-lg font-semibold mb-3" 
                style={{ color: '#C1A875', fontFamily: 'Inter, sans-serif' }}
              >
                Stay Updated
              </h4>
              <p 
                className="text-sm mb-4" 
                style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
              >
                Get the latest skincare tips and exclusive offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    borderColor: '#7D6A58'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#C1A875'}
                  onBlur={(e) => e.target.style.borderColor = '#7D6A58'}
                />
                <button 
                  className="px-6 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90"
                  style={{ 
                    backgroundColor: '#DAB6A2',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2">
                <p 
                  className="text-sm" 
                  style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                >
                  © 2025 Clarté Skincare. Made with
                </p>
                <Heart size={14} className="text-red-400 fill-current" />
                <p 
                  className="text-sm" 
                  style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                >
                  in India
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-6">
                {footerLinks.legal.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                    </a>
                    {index < footerLinks.legal.length - 1 && (
                      <span style={{ color: '#7D6A58' }}>|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
                  <span 
                    className="text-xs" 
                    style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                  >
                    SSL Secured
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
                  <span 
                    className="text-xs" 
                    style={{ color: '#F9F6F1', fontFamily: 'Inter, sans-serif' }}
                  >
                    100% Natural
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;