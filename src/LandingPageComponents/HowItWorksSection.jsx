import { Briefcase, Search, Shield, Users } from "lucide-react";
import StepCard from "../Components/StepCard";

export default function HowItWorksSection() {
// ============= HOW IT WORKS SECTION =============
const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      description: 'Sign up and build a comprehensive profile showcasing your skills or project needs.',
      icon: Users
    },
    {
      step: '02',
      title: 'Post or Browse',
      description: 'Clients post jobs, providers browse opportunities and submit proposals.',
      icon: Search
    },
    {
      step: '03',
      title: 'Connect & Work',
      description: 'Collaborate on projects with built-in messaging and milestone tracking.',
      icon: Briefcase
    },
    {
      step: '04',
      title: 'Get Paid Securely',
      description: 'Complete work, receive ratings, and get paid through our secure platform.',
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How ProxiWork Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
}