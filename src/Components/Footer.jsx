import { Briefcase } from 'lucide-react';

export default function Footer() {
// ============= FOOTER COMPONENT =============

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="text-blue-500" size={28} />
              <span className="text-xl font-bold text-white">ProxiWork</span>
            </div>
            <p className="text-gray-400">
              Connecting talent with opportunity across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Post a Job</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Browse Talent</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">For Freelancers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Find Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Create Profile</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ProxiWork. All rights reserved. Portfolio Project.</p>
        </div>
      </div>
    </footer>
  );

}