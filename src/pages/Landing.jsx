import { Link } from "react-router-dom"
import { useState } from "react"
import Card from "../components/Card"
import SupplierCard from "../components/SupplierCard"
import { suppliers } from "../data/suppliers"

export default function Landing() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Suppliers", icon: "🌟" },
    { id: "venue", name: "Venues", icon: "🏢" },
    { id: "dj", name: "DJs", icon: "🎵" },
    { id: "cake", name: "Cakes", icon: "🎂" },
    { id: "photographer", name: "Photographers", icon: "📸" },
    { id: "decor", name: "Decorations", icon: "🎨" },
    { id: "entertainment", name: "Entertainment", icon: "🎪" }
  ]

  const filteredSuppliers = selectedCategory === "all" 
    ? suppliers 
    : suppliers.filter(supplier => supplier.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">Evently</h1>
            </div>
            <div className="flex space-x-4">
              <Link 
                to="/package" 
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Event Suppliers
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our trusted suppliers by category or use our AI chatbot to get personalized recommendations for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-purple-200">
              <span className="text-purple-600 font-medium">💬 Try our AI Event Planner</span>
            </div>
            <p className="text-sm text-gray-500">Click the chat button in the bottom right corner</p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Suppliers Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === "all" ? "All Suppliers" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredSuppliers.length} supplier{filteredSuppliers.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {filteredSuppliers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSuppliers.map((supplier) => (
                <SupplierCard
                  key={supplier.id}
                  name={supplier.name}
                  rating={supplier.rating}
                  specialty={supplier.specialty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No suppliers found</h3>
              <p className="text-gray-600">Try selecting a different category or use our chatbot for personalized recommendations.</p>
            </div>
          )}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Three simple ways to plan your perfect event
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Suppliers</h3>
              <p className="text-gray-600">
                Explore our curated list of trusted suppliers by category. Each supplier is rated and reviewed by our community.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Chatbot Assistant</h3>
              <p className="text-gray-600">
                Use our intelligent chatbot to get personalized recommendations. It knows all our suppliers and will ask the right questions.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Package</h3>
              <p className="text-gray-600">
                Receive a complete event package with pricing and all the suppliers you need for your special day.
              </p>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}