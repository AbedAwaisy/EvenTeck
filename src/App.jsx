import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Landing from "./pages/Landing"
import Wizard from "./pages/Wizard"
import Package from "./pages/Package"
import Invite from "./pages/Invite"
import Chatbot from "./components/Chatbot"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <AppProvider>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/package" element={<Package />} />
          <Route path="/invite" element={<Invite />} />
        </Routes>
        {/* Global Chatbot - available on all pages */}
        <Chatbot />
      </div>
    </AppProvider>
  )
}

export default App