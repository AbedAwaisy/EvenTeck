const SupplierCard = ({ name, rating, image, specialty }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 min-w-[200px] border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{specialty}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">â˜…</span>
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierCard