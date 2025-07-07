import React, { useState, useEffect } from 'react'

const slides = [
    {id: 1, src: "src/assets/pics/hero1.jpg", alt: "hero1"},
    {id: 2, src: "src/assets/pics/hero2.jpg", alt: "hero2"},
]

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto my-12 rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full aspect-[16/9]"> {/* 16:9 aspect ratio */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img 
                            src={slide.src} 
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                
                {/* Navigation Arrows */}
                <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all duration-300 z-10" 
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                >
                    &#8249;
                </button>
                <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all duration-300 z-10" 
                    onClick={goToNext}
                    aria-label="Next slide"
                >
                    &#8250;
                </button>
                
                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero;