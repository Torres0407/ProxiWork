import { Briefcase, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
// ============= FOOTER COMPONENT =============

   const footerSections = [
     {
       title: 'For Freelancers',
       links: ['Find Jobs', 'How It Works', 'Earn Money', 'Withdraw Funds']
     },
     {
       title: 'For Clients',
       links: ['Post a Job', 'Find Talent', 'How It Works', 'Pricing']
     },
     {
       title: 'Support',
       links: ['Help Center', 'Contact Us', 'Safety Tips', 'Terms & Conditions']
     }
   ];
 
   const socialLinks = [
     { icon: Facebook, href: '#' },
     { icon: Twitter, href: '#' },
     { icon: Instagram, href: '#' },
     { icon: Linkedin, href: '#' }
   ];
 
   return (
     <footer className="bg-gray-900 text-white py-12 px-4">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           <div>
             <div className="flex items-center mb-4">
               <Briefcase className="text-orange-600 mr-2" size={28} />
               <span className="text-2xl font-extrabold">ProxiWork</span>
             </div>
             <p className="text-gray-400 mb-4">The trusted marketplace for Nigerian freelancers and businesses.</p>
             <p className="text-gray-500 text-sm">© 2024 ProxiWork. All rights reserved.</p>
           </div>
           {footerSections.map((section, index) => (
             <div key={index}>
               <h4 className="font-bold mb-4">{section.title}</h4>
               <ul className="space-y-3">
                 {section.links.map((link, linkIndex) => (
                   <li key={linkIndex}>
                     <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
 
         <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p>Follow us on social media</p>
           <div className="flex gap-4">
             {socialLinks.map((social, index) => (
               <a 
                 key={index}
                 href={social.href}
                 className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1"
               >
                 <social.icon size={20} />
               </a>
             ))}
           </div>
         </div>
       </div>
     </footer>
   );
}