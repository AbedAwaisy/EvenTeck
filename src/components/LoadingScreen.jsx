import { useState, useEffect } from "react"
import logo from "../assets/logo.jpg"

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    // Complete loading after 2 seconds
    const loadingTimeout = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onLoadingComplete()
      }, 500) // Fade out duration
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(loadingTimeout)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-stone-300/20 to-neutral-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-300/20 to-stone-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-neutral-300/20 to-slate-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-slate-400 rounded-full animate-ping" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-neutral-400 rounded-full animate-ping" style={{ animationDelay: '2.4s' }}></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Hover-like Effects */}
        <div className="relative mb-8">
          <div className="relative">
            {/* Fading Light Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/40 via-yellow-400/40 to-amber-400/40 rounded-full blur-2xl scale-150 animate-pulse"></div>
            
            {/* Circling Light */}
            <div className="absolute inset-0 border-2 border-transparent border-t-amber-400 border-r-amber-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
            
            {/* Logo Container */}
            <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-cultural border border-amber-200/30">
              <img 
                src={logo} 
                alt="EventTak Logo" 
                className="w-24 h-24 rounded-full object-cover shadow-gold"
              />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-6">
          <h1 className="text-4xl font-display font-bold text-gradient mb-2">EventTak</h1>
          <p className="text-lg font-arabic text-stone-600">تاك - لمسة الخاص بك</p>
        </div>


        {/* Loading Text */}
        <p className="text-stone-500 text-sm animate-pulse">
          نحضر تجربة لا تُنسى لك...
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen
