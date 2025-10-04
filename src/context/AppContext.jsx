import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const [eventPackage, setEventPackage] = useState(null)

  const updateAnswers = (newAnswers) => {
    setAnswers(prev => ({ ...prev, ...newAnswers }))
  }

  const generatePackage = () => {
    const generatedPackage = {
      venue: "Nazareth Community Hall",
      dj: "DJ Laila",
      cake: "SweetBites â€“ Unicorn Theme",
      photographer: "Lens & Light Studio",
      decor: "Balloon Bliss",
      total: 3200,
      breakdown: {
        venue: 800,
        dj: 600,
        cake: 500,
        photographer: 700,
        decor: 600
      }
    }
    setEventPackage(generatedPackage)
    return generatedPackage
  }

  const value = {
    answers,
    updateAnswers,
    package: eventPackage,
    generatePackage
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}