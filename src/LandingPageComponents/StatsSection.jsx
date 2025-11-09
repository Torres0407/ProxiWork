
// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: '50K+', label: 'Active Freelancers' },
    { value: '100K+', label: 'Jobs Completed' },
    { value: '₦2B+', label: 'Paid Out' },
    { value: '4.8★', label: 'Average Rating' }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-extrabold mb-2">{stat.value}</h3>
            <p className="text-lg opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default StatsSection;