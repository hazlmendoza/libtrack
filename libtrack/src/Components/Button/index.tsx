interface ButtonProps {
  variant?: "default" | "outline" | "destructive"; 
  children: React.ReactNode;
  className?: string; 
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  className = "",
  onClick,
}) => {
  const baseStyles =
   'm-2 w-48 py-2 px-4 text-lg text-defaultfont font-bold rounded-full focus:outline-none'

  const variants = {
    default: "bg-white hover:bg-pink-100",
    outline:
      "border bg-white border-black hover:bg-pink-100",
    destructive: "bg-red text-white hover:bg-pink-100 hover:text-black",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
