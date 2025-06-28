import React from 'react';

const Card = ({ 
  children, 
  className = "", 
  variant = "default",
  size = "md",
  hover = true,
  shadow = "md",
  rounded = "xl",
  padding = true,
  ...props 
}) => {

  const baseClasses = "backdrop-blur-sm transition-all duration-300 ease-out";

  const variants = {
    default: "bg-white/95 border border-gray-200/60 shadow-sm",
    elevated: "bg-white/98 border border-gray-100/80 shadow-lg",
    glass: "bg-white/10 border border-white/20 backdrop-blur-md shadow-xl",
    dark: "bg-gray-900/95 border border-gray-700/60 text-white shadow-lg",
    accent: "bg-amber-50/90 border border-amber-200/60 shadow-md",
    outlined: "bg-transparent border-2 border-gray-300 hover:border-gray-400",
    gradient: "bg-gradient-to-br from-amber-50/90 to-white/95 border border-amber-100/60 shadow-lg"
  };
  
  // Size variants
  const sizes = {
    xs: "text-xs",
    sm: "text-sm", 
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  
  // Padding variants
  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-8 sm:p-10"
  };
  
  // Rounded variants
  const roundedVariants = {
    none: "rounded-none",
    sm: "rounded-lg",
    md: "rounded-xl", 
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full"
  };
  
  // Shadow variants
  const shadows = {
    none: "shadow-none",
    sm: "shadow-sm hover:shadow-md",
    md: "shadow-md hover:shadow-lg", 
    lg: "shadow-lg hover:shadow-xl",
    xl: "shadow-xl hover:shadow-2xl"
  };
  
  // Hover effects
  const hoverClasses = hover 
    ? "hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0" 
    : "";
  
  // Focus styles for accessibility
  const focusClasses = "focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:ring-offset-2";
  
  const paddingClass = padding === true ? paddings.md : (padding === false ? paddings.none : paddings[padding] || paddings.md);
  
  return (
    <div 
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]}
        ${paddingClass}
        ${roundedVariants[rounded]}
        ${shadows[shadow]}
        ${hoverClasses} 
        ${focusClasses}
        ${className}
      `}
      tabIndex={hover ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

// Specialized Card variants for common use cases
export const GlassCard = ({ children, ...props }) => (
  <Card variant="glass" {...props}>
    {children}
  </Card>
);

export const FeatureCard = ({ icon, title, description, ...props }) => (
  <Card variant="elevated" className="group cursor-pointer" {...props}>
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors duration-300">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

export const StatCard = ({ label, value, trend, icon, ...props }) => (
  <Card variant="gradient" {...props}>
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {trend && (
          <p className={`text-sm font-medium ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value}
          </p>
        )}
      </div>
      {icon && (
        <div className="p-3 bg-white/80 rounded-xl">
          {icon}
        </div>
      )}
    </div>
  </Card>
);

// Example usage component
const CardShowcase = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Card Component Showcase
        </h1>
        
        {/* Basic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default">
            <h3 className="font-semibold mb-2">Default Card</h3>
            <p className="text-gray-600">Clean and simple design</p>
          </Card>
          
          <Card variant="elevated">
            <h3 className="font-semibold mb-2">Elevated Card</h3>
            <p className="text-gray-600">More prominent shadow</p>
          </Card>
          
          <GlassCard>
            <h3 className="font-semibold mb-2 text-white">Glass Card</h3>
            <p className="text-white/80">Glassmorphism effect</p>
          </GlassCard>
        </div>
        
        {/* Different Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card size="xs" padding="sm">Extra Small</Card>
          <Card size="sm" padding="sm">Small</Card>
          <Card size="md">Medium</Card>
          <Card size="lg">Large</Card>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            icon={<div className="w-6 h-6 bg-amber-500 rounded"></div>}
            title="Smart Splitting"
            description="AI-powered expense detection and automatic splitting"
          />
          <FeatureCard 
            icon={<div className="w-6 h-6 bg-blue-500 rounded"></div>}
            title="Real-time Sync"
            description="Instant updates across all devices"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
export { CardShowcase };