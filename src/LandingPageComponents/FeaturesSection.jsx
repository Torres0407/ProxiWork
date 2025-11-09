import { HeadphonesIcon, Lock, Smartphone, Star, TrendingUp, Zap } from 'lucide-react';
import FeatureCard from '../Components/FeatureCard.jsx';
// Features Section Component
const FeaturesSection = () => {
  const features = [
    { icon: Lock, title: 'Escrow Protection', description: 'All payments are held securely until work is completed. Your money is always protected.' },
    { icon: Zap, title: 'Quick Payouts', description: 'Get paid fast via Paystack, Flutterwave, or direct bank transfer. Withdraw anytime.' },
    { icon: Star, title: 'Verified Reviews', description: 'Build your reputation with verified reviews from real clients and freelancers.' },
    { icon: Smartphone, title: 'Mobile Friendly', description: 'Browse opportunities and manage jobs on the go. Full mobile support included.' },
    { icon: HeadphonesIcon, title: '24/7 Support', description: 'Our support team is always ready to help resolve disputes and answer questions.' },
    { icon: TrendingUp, title: 'Grow Your Business', description: 'Start with gigs, build relationships, and land bigger contracts with repeat clients.' }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
        Why Choose <span className="text-orange-600">ProxiWork</span>?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection;