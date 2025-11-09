import { CheckCircle } from 'lucide-react';
import Button from '../Components/Button.jsx';
// Hero Section Component
const HeroSection = ({ onOpenModal }) => {
  return (
    <section className="bg-gradient-to-br from-orange-600 to-blue-900 text-white py-20 px-4 min-h-[600px] flex items-center justify-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -top-24 -right-24"></div>
      <div className="absolute w-72 h-72 bg-white opacity-5 rounded-full -bottom-12 -left-12"></div>
      
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-slideDown">
          Find Work. Get Paid. Build Your Empire.
        </h1>
        <p className="text-lg sm:text-xl mb-8 opacity-95 animate-slideUp">
          The trusted Nigerian marketplace connecting talented freelancers with opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={() => onOpenModal('browse')}>
            Post a Gig
          </Button>
          <Button variant="secondary" onClick={() => onOpenModal('browse')}>
            Find Work
          </Button>
        </div>
        <p className="mt-8 text-sm sm:text-base opacity-90 flex flex-wrap justify-center gap-4">
          <span className="flex items-center gap-2">
            <CheckCircle size={20} /> 100% Secure Payments
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={20} /> Trusted Reviews
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={20} /> Nigerian Freelancers
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;