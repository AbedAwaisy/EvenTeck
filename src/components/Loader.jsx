const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    </div>
  )
}

export default Loader