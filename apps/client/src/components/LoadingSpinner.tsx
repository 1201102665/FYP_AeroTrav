import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const LoadingSpinner = ({ size = "md", className, text }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative">
        <div className={cn(
          "animate-spin rounded-full border-4 border-gray-200",
          "border-t-aerotrav-blue border-r-aerotrav-blue",
          sizeClasses[size],
          className
        )} />
        <div className={cn(
          "absolute inset-0 animate-pulse rounded-full",
          "bg-aerotrav-blue/10",
          sizeClasses[size]
        )} />
      </div>
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner; 