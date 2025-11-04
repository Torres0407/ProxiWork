export default function StepCard() {
// ============= STEP CARD COMPONENT =============
const StepCard = ({ step, title, description, icon: Icon }) => {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
          <Icon className="text-blue-600" size={32} />
        </div>
        <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
}