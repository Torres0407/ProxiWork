export default function CTASection() {

// ============= CTA SECTION =============
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of Nigerians already growing their careers and businesses on ProxiWork
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg">
            Find Work
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-bold text-lg">
            Hire Talent
          </button>
        </div>
      </div>
    </section>
  );
};
}