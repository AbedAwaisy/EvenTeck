const Card = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-cultural border border-stone-200/50 p-8 hover:shadow-elegant transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card