interface TagProps {
  label: string
  isActive?: boolean
  onClick?: () => void
  variant?: 'default' | 'filter'
  className?: string
}

export default function Tag({ 
  label, 
  isActive = false, 
  onClick, 
  variant = 'default',
  className = "" 
}: TagProps) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200"
  
  const variantClasses = {
    default: "bg-gray-800 text-gray-300 border border-gray-700",
    filter: isActive 
      ? "bg-brand-orange text-brand-black border border-brand-orange" 
      : "bg-transparent text-gray-300 border border-gray-600 hover:border-brand-orange hover:text-brand-orange"
  }
  
  const Component = onClick ? 'button' : 'span'
  
  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      onClick={onClick}
      aria-pressed={variant === 'filter' ? isActive : undefined}
    >
      {label}
    </Component>
  )
}
