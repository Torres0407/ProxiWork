import { Gavel, MessageSquare, Shield, ShieldCheck, UserCheck, X } from 'lucide-react';


// Trust Section Component
const TrustSection = () => {
  const trustItems = [
    { icon: ShieldCheck, title: 'Secure Transactions', description: 'All payments verified and protected by industry-leading security' },
    { icon: UserCheck, title: 'Verified Profiles', description: 'All users must verify their identity to build trust' },
    { icon: MessageSquare, title: 'Transparent Communication', description: 'All project discussions happen on our secure platform' },
    { icon: Gavel, title: 'Dispute Resolution', description: 'Fair and transparent process to resolve any conflicts' }
  ];

  return (
    <section id="trust" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Your Safety is Our Priority</h3>
          <ul className="space-y-6">
            {trustItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <item.icon className="text-green-600 flex-shrink-0" size={32} />
                <div>
                  <strong className="text-lg text-gray-900 block mb-1">{item.title}</strong>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-blue-900 rounded-2xl min-h-[400px] flex items-center justify-center text-white">
          <Shield size={120} />
        </div>
      </div>
    </section>
  );
};



// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-600 transition-colors duration-300"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <h2 className="text-2xl font-extrabold mb-6 text-gray-900">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default TrustSection;