import React, { useState } from 'react';
import { Star, Phone, MessageCircle, Instagram, MapPin, Award, Clock, Car, Plane, CheckCircle, Calendar, Bookmark, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const VendorProfile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const portfolioImages = [
    'https://images.unsplash.com/photo-1594736797933-d0101ba2fe65?w=600&h=800&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=800&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop&crop=face'
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-100 via-pink-50 to-amber-100">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 to-amber-200/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-rose-300 to-amber-300 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616c9c904e0?w=200&h=200&fit=crop&crop=face"
                    alt="Nagma Narasimha"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 font-semibold px-3 py-1">
                    🥇 Gold
                  </Badge>
                </div>
              </div>
            </div>

            {/* Vendor Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Nagma Narasimha
              </h1>
              <p className="text-xl text-gray-700 mb-4 font-medium">
                Makeup Artist | Hairstylist | Saree Draping Expert
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <MapPin className="h-5 w-5 text-rose-600" />
                <span className="text-gray-700 font-medium">Servicing Telangana</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-900">9/10</span>
                </div>
                <Badge variant="secondary" className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200">
                  <Award className="h-4 w-4 mr-1" />
                  HM Recommended Artist
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Now
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 px-6 py-2 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => window.open('https://www.instagram.com/telugu_ammayi_makeovers', '_blank')}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Portfolio</h2>
          <div className="relative max-w-md mx-auto">
            <AspectRatio ratio={3/4} className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative w-full h-full">
                <img
                  src={portfolioImages[currentImageIndex]}
                  alt={`Portfolio ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openLightbox(currentImageIndex)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>

                {/* View Full Button */}
                <button
                  onClick={() => openLightbox(currentImageIndex)}
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300"
                >
                  <Eye className="h-4 w-4 mr-2 inline" />
                  View Full
                </button>
              </div>
            </AspectRatio>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
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
      <section className="sticky bottom-0 z-50 bg-gradient-to-r from-rose-600 to-pink-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-white text-rose-600 hover:bg-gray-50 px-6 py-2 rounded-xl font-semibold shadow-lg">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message Now
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg">
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmark
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-sm w-full">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <AspectRatio ratio={3/4}>
              <img
                src={portfolioImages[currentImageIndex]}
                alt={`Portfolio ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <div className="flex justify-center gap-2 mt-4">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
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

export default VendorProfile;
