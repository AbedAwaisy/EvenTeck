import { Link } from "react-router-dom"
import { useApp } from "../context/AppContext"
import Card from "../components/Card"
import { suppliers } from "../data/suppliers"

export default function Package() {
  const { package: eventPackage, generatePackage } = useApp()

  // If no package exists, generate a default one
  const currentPackage = eventPackage || generatePackage()

  const packageItems = [
    {
      category: "venue",
      name: currentPackage.venue,
      price: currentPackage.breakdown.venue,
      icon: "🏢",
      description: "Perfect venue for your event"
    },
    {
      category: "dj",
      name: currentPackage.dj,
      price: currentPackage.breakdown.dj,
      icon: "🎵",
      description: "Professional DJ services"
    },
    {
      category: "cake",
      name: currentPackage.cake,
      price: currentPackage.breakdown.cake,
      icon: "🎂",
      description: "Custom cake design"
    },
    {
      category: "photographer",
      name: currentPackage.photographer,
      price: currentPackage.breakdown.photographer,
      icon: "📸",
      description: "Event photography"
    },
    {
      category: "decor",
      name: currentPackage.decor,
      price: currentPackage.breakdown.decor,
      icon: "🎨",
      description: "Party decorations"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Event Package</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've curated the perfect suppliers for your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/wizard"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Plan Another Event
            </Link>
            <Link 
              to="/invite"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors"
            >
              Create Invitations
            </Link>
          </div>
        </div>

        {/* Package Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packageItems.map((item) => (
            <Card key={item.category} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="text-2xl font-bold text-purple-600">${item.price}</div>
            </Card>
          ))}
        </div>

        {/* Total Summary */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Total Package Price</h2>
            <div className="text-5xl font-bold mb-2">${currentPackage.total}</div>
            <p className="text-purple-100">
              All-inclusive pricing with no hidden fees
            </p>
          </div>
        </Card>

        {/* Available Suppliers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Trusted Suppliers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier) => (
              <Card key={supplier.id} className="hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {supplier.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                    <p className="text-gray-600">{supplier.specialty}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600 ml-1">{supplier.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Book Your Event?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us to secure your package and start planning your perfect event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Book Now
            </button>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors">
              Contact Us
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}