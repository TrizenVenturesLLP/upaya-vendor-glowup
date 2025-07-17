import React, { useState } from 'react';
import { Star, Phone, MessageCircle, Instagram, MapPin, Award, Clock, Car, Plane, CheckCircle, Calendar, Bookmark, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Simple Navbar component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Happy Moments</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-rose-500 transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-rose-500 transition-colors">Portfolio</a>
          <a href="#reviews" className="hover:text-rose-500 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
        </div>
        <button className="md:hidden p-2 rounded hover:bg-rose-100" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow px-4 py-2 flex flex-col gap-2">
          <a href="#" className="py-2 hover:text-rose-500 transition-colors">Home</a>
          <a href="#portfolio" className="py-2 hover:text-rose-500 transition-colors">Portfolio</a>
          <a href="#reviews" className="py-2 hover:text-rose-500 transition-colors">Reviews</a>
          <a href="#contact" className="py-2 hover:text-rose-500 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
};

const VendorProfile = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [showServices, setShowServices] = useState(false);

  const portfolioImages = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
    '/assets/image4.jpg',
    '/assets/image5.jpg',
    '/assets/image6.jpg'
  ];

  const services = [
    'Bridal Makeup', 'Reception Makeup', 'Haldi/Mehendi', 'Engagement',
    'Party Makeup', 'Editorial', 'HD / Airbrush', 'Saree Draping',
    'Hair Styling', 'Special Event', 'Pre-Wedding', 'Destination Makeup'
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "HM is the best place! I've met many brides through them and they've all been super helpful. Nagma's work is just fabulous!",
      event: "Wedding"
    },
    {
      name: "Anitha Reddy",
      rating: 5,
      text: "Absolutely stunning work! Nagma transformed me completely for my reception. Her attention to detail is incredible.",
      event: "Reception"
    },
    {
      name: "Kavya Kumari",
      rating: 5,
      text: "Best makeup artist in Telangana! Professional, punctual, and creates magic with makeup. Highly recommended!",
      event: "Engagement"
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="flex justify-center items-center bg-gradient-to-br from-rose-50 via-white to-amber-50 py-6 px-4 min-h-[60vh]">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row h-[60vh]">
    
    {/* Left Image */}
    <div className="md:w-1/2 w-full h-[50%] md:h-full overflow-hidden">
      <img
        src="/assets/profile.jpg"
        alt="Nagma Narasimha"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Info Section */}
    <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nagma Narasimha
          </h2>
          <span className="bg-emerald-100 text-emerald-700 text-sm font-medium px-2 py-1 rounded-md">
            HM Recommended
          </span>
        </div>

        <p className="text-base md:text-lg text-gray-700 font-medium mb-1">
          Makeup Artist | Hairstylist | Saree Draping Expert
        </p>

        <div className="flex items-center text-gray-600 text-sm mt-2 mb-3">
          <MapPin className="h-4 w-4 text-rose-500 mr-1" />
          Servicing Telangana
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-yellow-500 font-semibold text-sm">
            <Star className="h-4 w-4 mr-1 fill-yellow-400" />
            9/10
          </div>
          <span className="bg-pink-100 text-pink-700 text-sm px-2 py-1 rounded-md">
            HD Makeup Available
          </span>
        </div>

        <p className="text-xl font-semibold text-gray-800 mt-2">
          ₹15,000 <span className="text-sm font-medium text-gray-500">Bridal Makeup</span>
        </p>

        {/* Show Services Button */}
        <button
          className="mt-6 mb-2 px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow hover:from-rose-600 hover:to-pink-600 transition-all"
          onClick={() => setShowServices(true)}
        >
          Show Services
        </button>

        {/* Improved Reviews UI */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 to-amber-300 shadow-md">
            <Star className="h-6 w-6 text-yellow-500 fill-yellow-400" />
          </div>
          <span className="font-semibold text-gray-800">Reviews</span>
          <span className="text-sm text-gray-500">({reviews.length})</span>
        </div>

      </div>

      {/* Icon-only Action Buttons */}
      <div className="flex gap-4 mt-8 md:mt-12">
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 shadow transition-colors"
          aria-label="Message Now"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-600 shadow transition-colors"
          aria-label="Call Now"
        >
          <Phone className="h-6 w-6" />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 shadow transition-colors"
          aria-label="Instagram"
          onClick={() => window.open('https://www.instagram.com/telugu_ammayi_makeovers', '_blank')}
        >
          <Instagram className="h-6 w-6" />
        </button>
      </div>

      {/* Services Modal */}
      {showServices && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-rose-500 text-2xl"
              onClick={() => setShowServices(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Services Offered</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx} className="px-4 py-2 rounded-lg bg-rose-50 text-gray-800 font-medium shadow-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>
</section>


      {/* Portfolio Carousel */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Portfolio</h2>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="break-inside-avoid mb-4 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300" onClick={() => openLightbox(index)}>
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Services Offered</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-rose-100">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center group-hover:from-rose-200 group-hover:to-amber-200 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Booking Info */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pricing */}
            <Card className="bg-gradient-to-br from-white to-rose-50 border-rose-200 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  Pricing & Booking
                </h3>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl text-white">
                    <p className="text-lg font-semibold mb-2">Price Range</p>
                    <p className="text-3xl font-bold">₹5,000 – ₹1,00,000</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span><strong>Advance:</strong> 20% upfront</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span><strong>Trial Makeup:</strong> Paid trial available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span><strong>Booking Notice:</strong> Minimum 5 days in advance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add-Ons */}
            <Card className="bg-gradient-to-br from-white to-amber-50 border-amber-200 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📦</span>
                  Special Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-emerald-800">Premium Products</p>
                      <p className="text-sm text-emerald-700">High-end makeup brands only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <Car className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-800">Self-Arranged Transport</p>
                      <p className="text-sm text-blue-700">No burden on client</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <Plane className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-800">Destination Events</p>
                      <p className="text-sm text-purple-700">Covered within Telangana</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Criteria */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Badge Criteria</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-2xl border border-amber-200">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="font-bold text-amber-800 mb-2">Gold Badge</h3>
              <p className="text-amber-700">9–10 Rating</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-slate-100 p-6 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-3">🥈</div>
              <h3 className="font-bold text-gray-800 mb-2">Silver Badge</h3>
              <p className="text-gray-700">7–8.9 Rating</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200">
              <div className="text-4xl mb-3">🥉</div>
              <h3 className="font-bold text-orange-800 mb-2">Bronze Badge</h3>
              <p className="text-orange-700">&lt;7 Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-sm w-full">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <AspectRatio ratio={3/4}>
              <img
                src={portfolioImages[lightboxImageIndex]}
                alt={`Portfolio ${lightboxImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <div className="flex justify-center gap-2 mt-4">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === lightboxImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PageWithNavbar = () => (
  <>
    <Navbar />
    <div className="pt-20"> {/* Add top padding to avoid overlap with fixed navbar */}
      <VendorProfile />
    </div>
  </>
);

export default PageWithNavbar;
