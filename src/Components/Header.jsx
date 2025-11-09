import { Briefcase, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

// Navigation Component
const Header = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Browse', href: '#browse' },
    { name: 'Categories', href: '#categories' },
    { name: 'Trust & Safety', href: '#trust' }
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Briefcase className="text-orange-600 mr-2" size={32} />
            <span className="text-2xl font-extrabold text-orange-600">ProxiWork</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" onClick={() => onOpenModal('login')}>
              Login
            </Button>
            <Button variant="filled" onClick={() => onOpenModal('signup')}>
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 animate-fadeIn">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" onClick={() => { onOpenModal('login'); setIsMenuOpen(false); }}>
                Login
              </Button>
              <Button variant="filled" onClick={() => { onOpenModal('signup'); setIsMenuOpen(false); }}>
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;