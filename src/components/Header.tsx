import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
// import { useIsMobile } from "@/hooks/use-mobile"; // Uncomment if you have this hook
// import { useUserStore } from "@/store/userStore"; // Uncomment if you have user store

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const isMobile = useIsMobile(); // Uncomment if you have this hook
  const navigate = useNavigate();
  // const user = useUserStore((state) => state.user); // Uncomment if you have user store
  const user = null; // Fallback: always show auth buttons

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 20) setScrollDirection("down");
      else if (currentScrollY < lastScrollY) setScrollDirection("up");
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 transform bg-[#1E3A8A] shadow-none ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md">
            <img src="/favicon.ico" alt="HappyMoments Logo" />
          </div>
          <span className="text-2xl font-bold text-white font-playfair">
            Happy<span className="text-[#F78A1F]">Moments</span>
          </span>
        </Link>
        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 ml-12">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-white font-normal hover:text-[#F78A1F] focus:outline-none transition-colors px-0 py-0 bg-transparent shadow-none">
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-[#F78A1F]/20 shadow-card p-2 rounded-xl w-56 animate-fade-in mt-2">
              <DropdownMenuItem className="hover:bg-[#F78A1F]/10 rounded-lg transition-custom cursor-pointer px-3 py-2">
                <Link to="/mandapas" className="w-full">Mandapas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#F78A1F]/10 rounded-lg transition-custom cursor-pointer px-3 py-2">
                <Link to="/category/photography" className="w-full">Photography</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#F78A1F]/10 rounded-lg transition-custom cursor-pointer px-3 py-2">
                <Link to="/category/venues" className="w-full">Venues</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#F78A1F]/10 rounded-lg transition-custom cursor-pointer px-3 py-2">
                <Link to="/category/catering" className="w-full">Catering</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#F78A1F]/10 rounded-lg transition-custom cursor-pointer px-3 py-2">
                <Link to="/category/decor-design" className="w-full">Decor & Design</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#F78A1F]/10 rounded-lg transition-custom cursor-pointer px-3 py-2">
                <Link to="/category/attire-accessories" className="w-full">Attire & Accessories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/vendors" className="text-white font-normal hover:text-[#F78A1F] transition-colors">All Vendors</Link>
          <Link to="/guestTracker" className="text-white font-normal hover:text-[#F78A1F] transition-colors">Guests Tracker</Link>
        </nav>
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/login")}
            className="text-white font-bold hover:text-[#F78A1F] hover:bg-transparent px-0"
          >
            Log in
          </Button>
          <Button
            className="bg-[#F78A1F] hover:bg-[#e67613] text-white font-bold rounded-md px-6 py-2 shadow-none"
          >
            Sign up
          </Button>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden rounded-full p-2 hover:bg-[#1E3A8A]/80 transition-custom"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1E3A8A]/95 backdrop-blur-md shadow-lg border-t border-white/10 animate-fade-in`}>
          <div className="max-w-7xl mx-auto py-4 flex flex-col space-y-4 px-8">
            <div className="flex flex-col space-y-2">
              <div className="py-2">
                <div className="font-medium mb-2 text-white">Categories</div>
                <div className="ml-4 flex flex-col space-y-2">
                  <Link to="/category/photography" className="text-white hover:text-[#F78A1F] transition-colors py-1">Photography</Link>
                  <Link to="/category/venues" className="text-white hover:text-[#F78A1F] transition-colors py-1">Venues</Link>
                  <Link to="/category/catering" className="text-white hover:text-[#F78A1F] transition-colors py-1">Catering</Link>
                  <Link to="/category/decor-design" className="text-white hover:text-[#F78A1F] transition-colors py-1">Decor & Design</Link>
                  <Link to="/category/attire-accessories" className="text-white hover:text-[#F78A1F] transition-colors py-1">Attire & Accessories</Link>
                </div>
              </div>
              <Link to="/vendors" className="text-white hover:text-[#F78A1F] transition-colors py-2">All Vendors</Link>
            </div>
            <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
                className="text-white font-bold hover:text-[#F78A1F] hover:bg-transparent px-0"
              >
                Log in
              </Button>
              <Button className="justify-start bg-[#F78A1F] hover:bg-[#e67613] text-white font-bold rounded-md px-6 py-2 shadow-none">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 