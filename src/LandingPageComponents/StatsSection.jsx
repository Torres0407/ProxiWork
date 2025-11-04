import { Award, Briefcase, TrendingUp, Users } from 'lucide-react';
import StatCard from '../Components/StatCard.jsx';
export default function StatsSection() {
    // ============= STATS SECTION COMPONENT =============
const StatsSection = () => {
  const stats = [
    { icon: Briefcase, value: '10,000+', label: 'Active Jobs' },
    { icon: Users, value: '50,000+', label: 'Registered Users' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: TrendingUp, value: '₦2B+', label: 'Paid Out' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
}