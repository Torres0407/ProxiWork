import { Briefcase, Menu, X } from "lucide-react";
// ============= HEADER COMPONENT =============
const Header = ({ onMenuToggle, mobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Briefcase className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">ProxiWork</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-gray-700 hover:text-blue-600 transition">Find Jobs</a>
            <a href="#talent" className="text-gray-700 hover:text-blue-600 transition">Find Talent</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition font-medium">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuToggle}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#jobs" className="block text-gray-700 hover:text-blue-600">Find Jobs</a>
            <a href="#talent" className="block text-gray-700 hover:text-blue-600">Find Talent</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
            <button className="w-full text-left text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;