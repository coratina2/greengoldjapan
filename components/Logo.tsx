import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <img
      src="/logo-greengold.png"
      alt="GreenGold Logo"
      className={className}
    />
  );
};

export default Logo;