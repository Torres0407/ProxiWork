import { Bolt, Briefcase } from "lucide-react";
import { useState } from "react";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import BrowseSection from "../LandingPageComponents/BrowseSection";
import CategoriesSection from "../LandingPageComponents/CategoriesSection";
import CTASection from "../LandingPageComponents/CTASection";
import FeaturesSection from "../LandingPageComponents/FeaturesSection";
import HeroSection from "../LandingPageComponents/HeroSection";
import StatsSection from "../LandingPageComponents/StatsSection";
import TrustSection from "../LandingPageComponents/TrustSection";

export default function LandingPage() {
  const [modalState, setModalState] = useState({ login: false, signup: false, browse: false });

  const openModal = (type) => setModalState({ ...modalState, [type]: true });
  const closeModal = (type) => setModalState({ ...modalState, [type]: false });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login functionality would connect to your backend. Redirecting to dashboard...");
    closeModal("login");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const userType = e.target.userType.value;
    alert(`Welcome! ${userType === "freelancer" ? "Start browsing jobs" : "Post your first job"}`);
    closeModal("signup");
  };

  const handlePostJob = (type) => {
    alert(`Opening form to post a new ${type}...`);
    closeModal("browse");
  };

  return (
    <>
    <div className="min-h-screen">
      <Header onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <FeaturesSection />
      <StatsSection />
      <CategoriesSection />
      <BrowseSection />
      <TrustSection />
      <CTASection onOpenModal={openModal} />
      <Footer />

      {/* Modals */}
      <Modal isOpen={modalState.login} onClose={() => closeModal("login")} title="Welcome Back">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email Address</label>
            <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Password</label>
            <input type="password" required placeholder="••••••••" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none" />
          </div>
          <Button variant="filled" className="w-full mt-6">Login</Button>
          <p className="text-center text-gray-600 mt-2">
            Don't have an account?{" "}
            <button type="button" onClick={() => { closeModal("login"); openModal("signup"); }} className="text-orange-600 font-semibold hover:underline">Sign Up</button>
          </p>
        </form>
      </Modal>

      <Modal isOpen={modalState.signup} onClose={() => closeModal("signup")} title="Create Your Account">
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Full Name</label>
            <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email Address</label>
            <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">I am a:</label>
            <select name="userType" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none">
              <option value="">Select User Type</option>
              <option value="freelancer">Freelancer</option>
              <option value="client">Client/Business</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Password</label>
            <input type="password" required placeholder="••••••••" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none" />
          </div>
          <Button variant="filled" className="w-full mt-6">Create Account</Button>
          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <button type="button" onClick={() => { closeModal("signup"); openModal("login"); }} className="text-orange-600 font-semibold hover:underline">Login</button>
          </p>
        </form>
      </Modal>

      <Modal isOpen={modalState.browse} onClose={() => closeModal("browse")} title="What would you like to do?">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handlePostJob("gig")}>
            <Bolt size={32} className="mb-3" />
            <h3 className="text-xl font-bold mb-2">Post a Gig</h3>
            <p className="text-sm opacity-90">One-time task (Quick work)</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handlePostJob("contract")}>
            <Briefcase size={32} className="mb-3" />
            <h3 className="text-xl font-bold mb-2">Post a Job</h3>
            <p className="text-sm opacity-90">Contract (Longer term)</p>
          </div>
        </div>
      </Modal>
    </div>
    </>
  );
}
