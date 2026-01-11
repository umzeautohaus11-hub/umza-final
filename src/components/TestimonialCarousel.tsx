'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Vineet Verma',
    testimonial: 'Importing a vehicle from Japan through Umze Autohaus was a smooth and well-managed experience. The team delivered the car exactly to the specifications I requested. Communication was clear throughout, costs were completely transparent, and I was kept updated from auction to delivery. The car arrived exactly as described. Highly recommended.',
    rating: 5
  },
  {
    name: 'Thomas Emmanouilidis',
    testimonial: 'Excellent communication from start to finish. Every question was answered promptly, and the team demonstrated deep knowledge of Japanese auctions and the import process. Full transparency regarding the vehicle’s condition gave me complete confidence. The car arrived exactly as expected. A very professional experience.',
    rating: 5
  },
  {
    name: 'Jono Fung',
    testimonial: 'Umze Autohaus made the entire buying process easy and transparent. All fees were clearly explained upfront with no hidden surprises. The vehicle arrived in the advertised condition, and the process was simple to follow from beginning to end. I couldn’t be happier with the service.',
    rating: 5
  },
  {
    name: 'Thang Do',
    testimonial: 'I had always wanted to import a car from Japan but found the process intimidating. Umze Autohaus made everything clear and straightforward from day one. They guided me through every step and handled the entire process professionally. Extremely helpful and trustworthy — I’m thrilled with the result.',
    rating: 5
  },
  {
    name: 'Akshay Mahajan',
    testimonial: 'Truly one of the best teams in the business. Umer was professional, responsive, and helped me secure the right car within my budget. The entire experience was smooth and stress-free. I would highly recommend Umze Autohaus and will definitely be a returning customer.',
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
      {/* Main Testimonial Card */}
      <div className="bg-[#1a2420] rounded-2xl p-6 sm:p-8 border border-[#25614F]/20 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-6 h-6 text-[#25614F] fill-current"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </motion.svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#BDB6AD] leading-relaxed mb-8 italic font-medium"
            >
              "{currentTestimonial.testimonial}"
            </motion.blockquote>

            {/* Author */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#EAE2D6] font-semibold text-xl"
            >
              - {currentTestimonial.name}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-[#25614F] rounded-full flex items-center justify-center text-white hover:bg-[#1e4f3f] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-[#25614F] rounded-full flex items-center justify-center text-white hover:bg-[#1e4f3f] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#25614F] w-8'
                : 'bg-[#25614F]/30 hover:bg-[#25614F]/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-[#BDB6AD] hover:text-[#EAE2D6] transition-colors duration-300 flex items-center gap-2"
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#25614F]' : 'bg-[#BDB6AD]'}`}></div>
          {isAutoPlaying ? 'Auto-play enabled' : 'Auto-play paused'}
        </button>
      </div>
    </div>
  );
}