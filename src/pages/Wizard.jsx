import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useApp } from "../context/AppContext"
import Card from "../components/Card"

export default function Wizard() {
  const navigate = useNavigate()
  const { updateAnswers, generatePackage } = useApp()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = [
    {
      id: "eventType",
      question: "What type of event are you planning?",
      type: "select",
      options: [
        { value: "birthday", label: "Birthday Party" },
        { value: "wedding", label: "Wedding" },
        { value: "corporate", label: "Corporate Event" },
        { value: "anniversary", label: "Anniversary" },
        { value: "graduation", label: "Graduation" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: "guestCount",
      question: "How many guests are you expecting?",
      type: "select",
      options: [
        { value: "1-20", label: "1-20 guests" },
        { value: "21-50", label: "21-50 guests" },
        { value: "51-100", label: "51-100 guests" },
        { value: "100+", label: "100+ guests" }
      ]
    },
    {
      id: "budget",
      question: "What's your budget range?",
      type: "select",
      options: [
        { value: "under-1000", label: "Under $1,000" },
        { value: "1000-3000", label: "$1,000 - $3,000" },
        { value: "3000-5000", label: "$3,000 - $5,000" },
        { value: "5000+", label: "$5,000+" }
      ]
    },
    {
      id: "date",
      question: "When is your event?",
      type: "select",
      options: [
        { value: "asap", label: "ASAP" },
        { value: "1-month", label: "Within 1 month" },
        { value: "2-3-months", label: "2-3 months" },
        { value: "3+months", label: "3+ months" }
      ]
    },
    {
      id: "location",
      question: "Where would you like to host your event?",
      type: "select",
      options: [
        { value: "indoor", label: "Indoor venue" },
        { value: "outdoor", label: "Outdoor venue" },
        { value: "home", label: "At home" },
        { value: "flexible", label: "I'm flexible" }
      ]
    }
  ]

  const handleAnswer = (questionId, answer) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Final step - generate package
      updateAnswers(answers)
      generatePackage()
      navigate("/package")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentQuestion = questions[currentStep]
  const isAnswered = answers[currentQuestion.id]
  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Planning Wizard</h1>
          <p className="text-gray-600">Let's create your perfect event together</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQuestion.id] === option.value
                    ? "border-purple-600 bg-purple-50 text-purple-900"
                    : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`px-6 py-3 rounded-lg font-medium ${
              isAnswered
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentStep === questions.length - 1 ? "Generate Package" : "Next"}
          </button>
        </div>

        {/* Quick Summary */}
        {Object.keys(answers).length > 0 && (
          <Card className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Selections</h3>
            <div className="space-y-2">
              {Object.entries(answers).map(([key, value]) => {
                const question = questions.find(q => q.id === key)
                const option = question?.options.find(opt => opt.value === value)
                return (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600">{question?.question}</span>
                    <span className="font-medium text-gray-900">{option?.label}</span>
                  </div>
                )
              })}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}