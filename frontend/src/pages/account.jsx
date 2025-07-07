import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Shield, Sparkles, Heart, UserPlus, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Update if deployed
});

const Account = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    console.log("Component mounted");
    e.preventDefault();

    try {
      if (isLogin) {
        // Login logic
        const { data } = await API.post("/users/login", {
          email: formData.email,
          password: formData.password,
        });
        console.log("Login success:", data);
        localStorage.setItem("clarteToken", data.token);
        alert(`Welcome back, ${data.name || "User"}!`);
        // Redirect to home page
        navigate('/home');
      } else {
        // Register logic
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }

        const { data } = await API.post("/users/register", {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });
        console.log("Signup success:", data);
        alert("Account created! Please login.");
        toggleMode(); // switch to login after signup
      }
    } catch (err) {
      console.error("Error:", err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login initiated`);
    alert(`${provider} login will be implemented with their respective APIs`);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFBF7' }}>
      {/* Header Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl" style={{ backgroundColor: 'rgba(193, 168, 117, 0.1)' }}></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(249, 246, 241, 0.9)', border: '1px solid rgba(193, 168, 117, 0.3)' }}>
            {isLogin ? <LogIn style={{ color: '#C1A875' }} size={16} /> : <UserPlus style={{ color: '#C1A875' }} size={16} />}
            <span className="text-sm font-medium" style={{ color: '#7D6A58' }}>
              {isLogin ? 'Welcome Back' : 'Join Our Community'}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#333333' }}>
            {isLogin ? (
              <>Your <span style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Account</span></>
            ) : (
              <>Join <span style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Clarte</span></>
            )}
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#7D6A58' }}>
            {isLogin ?
              'Sign in to access your personalized skincare journey and exclusive member benefits.' :
              'Create your account to unlock personalized skincare recommendations and exclusive member perks.'
            }
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">

          {/* Mode Toggle */}
          <div className="text-center mb-8">
            <div className="inline-flex rounded-full p-1" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', border: '1px solid rgba(193, 168, 117, 0.3)' }}>
              <button
                onClick={() => !isLogin && toggleMode()}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${isLogin ? 'shadow-md' : ''
                  }`}
                style={{
                  backgroundColor: isLogin ? '#C1A875' : 'transparent',
                  color: isLogin ? '#F9F6F1' : '#7D6A58'
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => isLogin && toggleMode()}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${!isLogin ? 'shadow-md' : ''
                  }`}
                style={{
                  backgroundColor: !isLogin ? '#C1A875' : 'transparent',
                  color: !isLogin ? '#F9F6F1' : '#7D6A58'
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="p-8 rounded-2xl shadow-xl" style={{ backgroundColor: '#F9F6F1', border: '1px solid rgba(193, 168, 117, 0.2)' }}>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: '#333333' }}>
                {isLogin ? 'Sign in with' : 'Sign up with'}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: 'rgba(193, 168, 117, 0.3)',
                    color: '#333333'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>

                <button
                  onClick={() => handleSocialLogin('Facebook')}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#1877F2',
                    borderColor: '#1877F2',
                    color: '#FFFFFF'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialLogin('Twitter')}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#1DA1F2',
                    borderColor: '#1DA1F2',
                    color: '#FFFFFF'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </button>

                <button
                  onClick={() => handleSocialLogin('Instagram')}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 hover:shadow-md"
                  style={{
                    background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                    borderColor: 'transparent',
                    color: '#FFFFFF'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: 'rgba(193, 168, 117, 0.3)' }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4" style={{ backgroundColor: '#F9F6F1', color: '#7D6A58' }}>
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Fields (Sign Up Only) */}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3" style={{ color: '#C1A875' }} size={18} />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: '#FFFFFF',
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
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3" style={{ color: '#C1A875' }} size={18} />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: '#FFFFFF',
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
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3" style={{ color: '#C1A875' }} size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: '#FFFFFF',
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

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3" style={{ color: '#C1A875' }} size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: '#FFFFFF',
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
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3" style={{ color: '#C1A875' }} size={18} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: '#FFFFFF',
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
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Terms Checkbox (Sign Up Only) */}
              {!isLogin && (
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    style={{ accentColor: '#C1A875' }}
                  />
                  <label htmlFor="acceptTerms" className="text-sm" style={{ color: '#7D6A58' }}>
                    I agree to the <a href="#" className="font-medium hover:underline" style={{ color: '#C1A875' }}>Terms of Service</a> and <a href="#" className="font-medium hover:underline" style={{ color: '#C1A875' }}>Privacy Policy</a>
                  </label>
                </div>
              )}

              {/* Forgot Password (Login Only) */}
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm font-medium hover:underline" style={{ color: '#C1A875' }}>
                    Forgot your password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
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
                {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Switch Mode Link */}
            <div className="text-center mt-6">
              <p className="text-sm" style={{ color: '#7D6A58' }}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={toggleMode}
                  className="font-medium hover:underline"
                  style={{ color: '#C1A875' }}
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(249, 246, 241, 0.5)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
            <Heart style={{ color: '#F9F6F1' }} size={32} />
          </div>

          <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
            Member Benefits
          </h2>

          <p className="text-lg mb-12" style={{ color: '#7D6A58' }}>
            Join thousands of satisfied customers who trust Clarte for their skincare journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <Shield style={{ color: '#F9F6F1' }} size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Personalized Recommendations</h3>
              <p className="text-sm" style={{ color: '#7D6A58' }}>
                Get skincare products tailored to your unique skin type and concerns
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <Sparkles style={{ color: '#F9F6F1' }} size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Exclusive Access</h3>
              <p className="text-sm" style={{ color: '#7D6A58' }}>
                Be the first to try new products and enjoy member-only discounts
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to right, #C1A875, #DAB6A2)' }}>
                <Heart style={{ color: '#F9F6F1' }} size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>Expert Support</h3>
              <p className="text-sm" style={{ color: '#7D6A58' }}>
                Get personalized advice from our skincare experts whenever you need it
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;