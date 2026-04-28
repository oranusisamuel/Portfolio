const Button = ({ className = "", size = "md", children, ...props }) => {
  const baseClasses = "relative overflow-hidden rounded-full font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary bg-secondary-foreground text-background hover:bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
    
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }
    const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.md} ${className}`;
  return (
    <button className={classes} {...props}>
        <span className='relative flex justify-center items-center gap-2'>{children}</span>
    </button>
  )
}

export default Button