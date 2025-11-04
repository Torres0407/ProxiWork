import { Award, Briefcase, Clock, MapPin, Shield, Star, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TestimonialSection from '../Components/TestimonialSection';
import CategoriesSection from '../LandingPageComponents/CategoriesSection';
import CTASection from '../LandingPageComponents/CTASection';
import FeaturedJobsSection from '../LandingPageComponents/FeaturedJobsSection';
import HeroSection from '../LandingPageComponents/HeroSection';
import HowItWorksSection from '../LandingPageComponents/HowItWorksSection';
import StatsSection from '../LandingPageComponents/StatsSection';

// ============= MAIN APP COMPONENT =============
export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState('client');

  const featuredJobs = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      category: 'Digital',
      budget: '₦150,000 - ₦300,000',
      location: 'Remote',
      postedTime: '2 hours ago',
      proposals: 12,
      description: 'Looking for an experienced developer to build an e-commerce platform.',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Professional Plumber',
      category: 'Local Service',
      budget: '₦50,000 - ₦80,000',
      location: 'Lekki, Lagos',
      postedTime: '5 hours ago',
      proposals: 8,
      description: 'Need a skilled plumber for bathroom and kitchen renovation.',
      skills: ['Plumbing', 'Installation', 'Repair']
    },
    {
      id: 3,
      title: 'Graphic Designer for Brand',
      category: 'Digital',
      budget: '₦80,000 - ₦120,000',
      location: 'Remote',
      postedTime: '1 day ago',
      proposals: 24,
      description: 'Create complete brand identity including logo and guidelines.',
      skills: ['Illustrator', 'Branding', 'Logo']
    }
  ];

  const categories = [
    { name: 'Web Development', count: 234, icon: Briefcase },
    { name: 'Graphic Design', count: 189, icon: Users },
    { name: 'Content Writing', count: 156, icon: Star },
    { name: 'Plumbing', count: 98, icon: MapPin },
    { name: 'Electrical', count: 87, icon: Clock },
    { name: 'Tutoring', count: 145, icon: Award },
    { name: 'Photography', count: 76, icon: TrendingUp },
    { name: 'Carpentry', count: 65, icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Adewale Johnson',
      role: 'Business Owner',
      rating: 5,
      comment: 'Found an amazing developer for my e-commerce site. The process was smooth and professional!',
      avatar: 'AJ'
    },
    {
      name: 'Chioma Okafor',
      role: 'Freelance Designer',
      rating: 5,
      comment: 'ProxiWork helped me land consistent clients. I\'ve tripled my income in 6 months!',
      avatar: 'CO'
    },
    {
      name: 'Ibrahim Musa',
      role: 'Electrician',
      rating: 5,
      comment: 'As a local service provider, this platform connected me with clients I never would have reached.',
      avatar: 'IM'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        mobileMenuOpen={mobileMenuOpen}
      />
      
      <HeroSection 
        userType={userType}
        onUserTypeChange={setUserType}
      />
      
      <StatsSection />
      
      <FeaturedJobsSection jobs={featuredJobs} />
      
      <HowItWorksSection />
      
      <CategoriesSection categories={categories} />
      
      <TestimonialSection testimonials={testimonials} />
      
      <CTASection />
      
      <Footer />
    </div>
  );
}