// Button Component
const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1";
  const variants = {
    primary: "bg-white text-orange-600 hover:shadow-xl",
    secondary: "bg-orange-600 text-white border-2 border-white hover:bg-transparent",
    outline: "bg-transparent text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white",
    filled: "bg-orange-600 text-white border-2 border-orange-600 hover:bg-orange-700"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;