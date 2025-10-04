const SupplierCard = ({ name, rating, image, specialty }) => {
  return (
    <div className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-cultural p-6 border border-stone-200/50 hover:shadow-elegant hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-cultural rounded-3xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-stone-900 text-lg mb-1">{name}</h4>
          <p className="text-stone-600 mb-2">{specialty}</p>
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-sm ${i < Math.floor(rating) ? 'text-amber-400' : 'text-stone-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-stone-500 ml-2 font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierCard