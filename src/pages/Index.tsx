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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Header from '@/components/Header';

const VendorProfile = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [showServices, setShowServices] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  // Pop-up state
  const [showOfferPopup, setShowOfferPopup] = useState(false);

  React.useEffect(() => {
    if (!sessionStorage.getItem('offerPopupDismissed')) {
      setShowOfferPopup(true);
    }
  }, []);

  const handleCloseOfferPopup = () => {
    setShowOfferPopup(false);
    sessionStorage.setItem('offerPopupDismissed', 'true');
  };

  const highlightedImages = [
    '/assets/image4.jpg',
    '/assets/image5.jpg',
    '/assets/image6.jpg',
  ];
  const catalogImages = [
    '/assets/image1.jpg',
    '/assets/image6.jpg',
    '/assets/image5.jpg',
    '/assets/image4.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
  ];

  const services = [
    'Bridal Makeup', 'Reception Makeup', 'Haldi/Mehendi', 'Engagement',
    'Party Makeup', 'Editorial', 'HD / Airbrush', 'Saree Draping',
    'Hair Styling', 'Special Event', 'Pre-Wedding', 'Destination Makeup'
  ];

  const vendorTags = [
    'Bridal Specialist',
    'Travels to Venue',
    'HD Makeup',
    'Saree Draping',
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
    }, 
    {
      name: "Anushka Sharma",
      rating: 5,
      text: "HM is the best place! I've met many brides through them and they've all been super helpful. Nagma's work is just fabulous!",
      event: "Wedding"
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  // Update lightbox to use both arrays
  const allImages = [...highlightedImages, ...catalogImages];

  return (
    <div className="min-h-screen">
      {/* ₹500 OFF Pop-Up Modal */}
      {showOfferPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center animate-fade-in">
            <button
              onClick={handleCloseOfferPopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
              aria-label="Close offer popup"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-rose-600 mb-2 text-center">Get ₹500 OFF on your first booking!</h3>
            <p className="text-gray-700 text-center mb-4">Limited time offer for new customers. Book now and save instantly!</p>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all text-lg animate-pulse"
              onClick={handleCloseOfferPopup}
            >
              Book Now & Save
            </Button>
          </div>
        </div>
      )}
      {/* Hero/Profile Section with Tabs */}
      <section className="flex justify-center items-center py-6 px-4 min-h-[60vh]">
        <div className="w-full max-w-7xl rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row h-[85vh] bg-white">
          {/* Left Image */}
          <div className="md:w-1/2 w-full h-[50%] md:h-full overflow-hidden">
            <img
              src="/assets/profile.jpg"
              alt="Nagma Narasimha"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Info Section with Tabs */}
          <div className="md:w-1/2 w-full p-8 md:p-14 flex flex-col justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex gap-2 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
              {/* Each tab content is scrollable with a small scrollbar */}
              <TabsContent value="overview">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Nagma Narasimha
                    </h2>
                    <span className="bg-emerald-100 text-emerald-700 text-sm font-medium px-2 py-1 rounded-md">
                      HM Recommended
                    </span>
                  </div>
                  {/* Gold Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="flex items-center cursor-pointer text-yellow-600 font-bold bg-yellow-100 px-2 py-1 rounded-md shadow-sm text-base">
                            <span className="text-xl mr-1">🏅</span> Gold Badge
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <div className="text-xs font-medium mb-1">Gold Badge: 9.1 Rating</div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  {/* Vendor Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {vendorTags.map((tag, idx) => (
                      <Badge key={idx} className="bg-pink-100 text-pink-700 font-medium">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-gray-700 font-medium mb-1">
                    Makeup Artist | Hairstylist | Saree Draping Expert
                  </p>
                  {/* Experience Info */}
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="flex items-center text-gray-800 text-base font-semibold"><span className="text-xl mr-1">💼</span> 7+ Years Experience in Bridal Makeup</span>
                    <span className="flex items-center text-gray-800 text-base font-semibold"><span className="text-xl mr-1">🎨</span> 120+ Bridal Projects Done</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-2 mb-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="flex items-center cursor-pointer">
                            <MapPin className="h-4 w-4 text-rose-500 mr-1" />
                            Servicing Telangana
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <div className="text-xs font-medium mb-1">Check pincode availability</div>
                          <a
                            href="https://www.google.com/maps/search/Telangana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline text-xs"
                          >
                            View on Google Maps
                          </a>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
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
                  <p className="text-xl font-semibold text-gray-800 mt-2 mb-4">
                    ₹15,000 <span className="text-sm font-medium text-gray-500">Bridal Makeup</span>
                  </p>
                  {/* Get ₹500 OFF Banner */}
                  <div className="flex items-center mb-0">
                    <span className="bg-yellow-100 text-yellow-800 font-bold text-lg px-6 py-2 rounded-full shadow animate-pulse border-2 border-yellow-300">
                      🎉 Get ₹500 OFF on your first booking!
                    </span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="services">
                <div className="h-64 md:h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent pr-2">
                  <ul className="space-y-2">
                    {services.map((service, idx) => (
                      <li key={idx} className="px-4 py-2 rounded-lg bg-rose-50 text-gray-800 font-medium shadow-sm">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="h-64 md:h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent pr-2 space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={index} className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-2 italic">"{review.text}"</p>
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-600">{review.event}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="portfolio">
                <div className="h-64 md:h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent pr-2 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Highlighted Works</h2>
                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    {highlightedImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-40 h-40 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={image}
                          alt={`Highlighted Work ${index + 1}`}
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Catalog / Previous Works</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {catalogImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-32 h-44 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                        onClick={() => openLightbox(index + highlightedImages.length)}
                      >
                        <img
                          src={image}
                          alt={`Catalog Work ${index + 1}`}
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            {/* End tab content */}
            </Tabs>
            {/* Sticky Action Buttons for mobile */}
            <div className="flex gap-4 mt-8 md:mt-12 md:static fixed bottom-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-40 border-t md:border-none border-rose-100 shadow md:shadow-none justify-center md:justify-start">
              <button
                className="w-36 h-12 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-sm transition-all text-lg gap-2 animate-pulse border-2 border-orange-300"
                aria-label="Chat Now"
              >
                <span className="text-xl">💬</span> Chat Now
              </button>
              <button
                className="w-36 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-sm transition-all text-lg gap-2 animate-pulse border-2 border-green-300"
                aria-label="Call Now"
              >
                <span className="text-xl">📞</span> Call Now
              </button>
              <button
                className="w-36 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-sm transition-all text-lg gap-2 animate-pulse border-2 border-pink-300"
                aria-label="Book Now"
              >
                <span className="text-xl">📅</span> Book Now
              </button>
            </div>
            {/* Persistent offer line below action buttons */}
            
          </div>
        </div>
      </section>

      {/* Highlighted Works - Horizontal Layout */}
      <div className="w-full h-full max-w-9xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Highlighted Works</h2>
        <div className="flex flex-row gap-6 justify-center items-center">
          {highlightedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-72 h-85 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex-shrink-0 flex-grow-0"
            >
              <img
                src={image}
                alt={`Highlighted Work ${index + 1}`}
                className="w-full h-full object-cover"
              />
    
            </div>
          ))}
        </div>
      </div>
      {/* Catalog / Previous Works - Asymmetric Grid + Content Block */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Catalog / Previous Works</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {catalogImages.map((image, index) => (
                <div
                  key={index}
                  className="mb-4 break-inside-avoid rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => openLightbox(index + highlightedImages.length)}
                >
                  <img
                    src={image}
                    alt={`Catalog Work ${index + 1}`}
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Services Offered Card aligned to top */}
          <div className="md:w-[450px] flex flex-col md:mt-0 mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 md:text-left text-center">Services Offered</h3>
            <div className="w-full bg-[#FFF8ED] rounded-2xl shadow p-8 flex flex-col gap-8 justify-center">
              <ul className="list-disc list-inside text-gray-800 mb-8 text-base leading-relaxed">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Pricing & Booking</h4>
                <ul className="list-disc list-inside text-gray-800 mb-4 text-base leading-relaxed">
                  <li><strong>Price Range:</strong> ₹5,000 – ₹1,00,000</li>
                  <li><strong>Advance:</strong> 20% upfront</li>
                  <li><strong>Trial Makeup:</strong> Paid trial available</li>
                  <li><strong>Booking Notice:</strong> Minimum 5 days in advance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Special Features</h4>
                <ul className="list-disc list-inside text-gray-800 text-base leading-relaxed">
                  <li><strong>Premium Products:</strong> High-end makeup brands only</li>
                  <li><strong>Self-Arranged Transport:</strong> No burden on client</li>
                  <li><strong>Destination Events:</strong> Covered within Telangana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews - Full Width Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-2 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Badge Criteria Info - Simple Points */}
      <div className="max-w-4xl mx-auto px-4 pb-12 text-center text-gray-700 text-sm">
        <div className="font-semibold mb-2">Badge Criteria:</div>
        <ul className="list-disc list-inside inline-block text-left">
          <li><span className="font-bold">Gold Badge</span>: 9–10 Rating</li>
          <li><span className="font-bold">Silver Badge</span>: 7–8.9 Rating</li>
          <li><span className="font-bold">Bronze Badge</span>: &lt;7 Rating</li>
        </ul>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-sm w-full">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              title="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <AspectRatio ratio={3/4}>
              <img
                src={allImages[lightboxImageIndex]}
                alt={`Portfolio ${lightboxImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <div className="flex justify-center gap-2 mt-4">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === lightboxImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  title={`Go to image ${index + 1}`}
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
    <Header />
    <div className="pt-20"> {/* Add top padding to avoid overlap with fixed navbar */}
      <VendorProfile />
    </div>
  </>
);

export default PageWithNavbar;
