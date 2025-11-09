import Button from "../Components/Button";
export default function CTASection({ onOpenModal }){
  return (
    <section className="bg-gradient-to-br from-orange-600 to-blue-900 text-white py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Start Earning?</h2>
      <p className="text-lg mb-8 opacity-95">Join thousands of Nigerian freelancers and businesses already earning on ProxiWork</p>
      <Button variant="primary" onClick={() => onOpenModal('signup')}>
        Get Started Today
      </Button>
    </section>
  );
};
