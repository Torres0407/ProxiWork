import { useState } from "react";
import OpportunityCard from "../Components/OpportunityCard";

// Browse Section Component
const BrowseSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const opportunities = [
    { id: 1, type: 'gig', title: 'Design a Modern Logo', description: 'Need a professional logo for my new startup. Minimalist style preferred.', price: '₦15,000', rating: 4.8, reviews: 124, poster: 'Tech Startup Lagos' },
    { id: 2, type: 'gig', title: 'Write 5 Blog Posts (SEO)', description: 'SEO-optimized blog posts about tech and entrepreneurship (1500 words each)', price: '₦25,000', rating: 4.9, reviews: 89, poster: 'Digital Marketing Agency' },
    { id: 3, type: 'contract', title: 'Virtual Assistant - 3 Months', description: 'Full-time VA needed for email, scheduling, and customer service. Remote work.', price: '₦200,000/month', rating: 4.7, reviews: 234, poster: 'E-commerce Business' },
    { id: 4, type: 'gig', title: 'Build a Landing Page', description: 'Create a responsive landing page using HTML, CSS, and JavaScript. Must include contact form.', price: '₦50,000', rating: 4.9, reviews: 156, poster: 'Fintech Startup' },
    { id: 5, type: 'contract', title: 'Social Media Manager - 6 Months', description: 'Manage Instagram, Twitter, and TikTok. Create content calendar and track analytics.', price: '₦150,000/month', rating: 4.8, reviews: 201, poster: 'Fashion Brand' },
    { id: 6, type: 'gig', title: 'Video Editing (YouTube)', description: 'Edit 10 YouTube videos with transitions, graphics, and color correction.', price: '₦35,000', rating: 4.9, reviews: 178, poster: 'Content Creator' },
    { id: 7, type: 'gig', title: 'Mobile App UI Design', description: 'Design UI/UX mockups for a fitness tracking mobile application.', price: '₦60,000', rating: 4.8, reviews: 145, poster: 'Health Tech Startup' },
    { id: 8, type: 'contract', title: 'Full-Stack Developer - 6 Months', description: 'Build and maintain a web application using React and Node.js. Full remote.', price: '₦500,000/month', rating: 4.9, reviews: 312, poster: 'SaaS Company' }
  ];

  const filteredOpportunities = activeFilter === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.type === activeFilter);

  return (
    <section id="browse" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Featured <span className="text-orange-600">Opportunities</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeFilter === 'all' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-600 border-gray-300 hover:border-orange-600'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeFilter === 'gig' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-600 border-gray-300 hover:border-orange-600'}`}
            onClick={() => setActiveFilter('gig')}
          >
            One-Time Gigs
          </button>
          <button 
            className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeFilter === 'contract' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-600 border-gray-300 hover:border-orange-600'}`}
            onClick={() => setActiveFilter('contract')}
          >
            Contracts
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOpportunities.map(opp => (
            <OpportunityCard key={opp.id} {...opp} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BrowseSection;