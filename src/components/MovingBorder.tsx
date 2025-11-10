import { ReactNode } from "react";

interface MovingBorderProps {
  children: ReactNode;
  className?: string;
  borderClassName?: string;
}

const MovingBorder = ({ children, className = "", borderClassName = "" }: MovingBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-75 group-hover:opacity-100 blur-sm transition duration-500 animate-[gradient_3s_ease_infinite] ${borderClassName}`} 
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default MovingBorder;
