import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface FastNavigateButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  children: React.ReactNode;
  loadingText?: string;
}

export default function FastNavigateButton({ 
  href, 
  children, 
  loadingText = "Loading...",
  disabled,
  ...props 
}: FastNavigateButtonProps) {
  const [, setLocation] = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleFastNavigate = () => {
    if (disabled || isNavigating) return;
    
    setIsNavigating(true);
    // Immediate visual feedback, then navigate
    setTimeout(() => {
      setLocation(href);
    }, 50);
  };

  return (
    <Button 
      {...props}
      onClick={handleFastNavigate}
      disabled={disabled || isNavigating}
    >
      {isNavigating ? loadingText : children}
    </Button>
  );
}