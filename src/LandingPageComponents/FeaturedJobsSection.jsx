import { ChevronRight } from "lucide-react";

export default function FeaturedJobsSection() {
// ============= FEATURED JOBS SECTION =============
const FeaturedJobsSection = ({ jobs }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Opportunities
          </h2>
          <p className="text-xl text-gray-600">
            Browse the latest jobs from top clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center">
            View All Jobs
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
}