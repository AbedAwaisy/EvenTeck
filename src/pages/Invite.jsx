import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"

export default function Invite() {
  const [inviteData, setInviteData] = useState({
    eventName: "",
    hostName: "",
    date: "",
    time: "",
    location: "",
    message: "",
    theme: "elegant"
  })

  const [isPreview, setIsPreview] = useState(false)

  const themes = [
    { id: "elegant", name: "Elegant", colors: "from-purple-600 to-pink-600" },
    { id: "fun", name: "Fun & Colorful", colors: "from-blue-500 to-green-500" },
    { id: "classic", name: "Classic", colors: "from-gray-700 to-gray-900" },
    { id: "romantic", name: "Romantic", colors: "from-pink-500 to-red-500" }
  ]

  const handleInputChange = (field, value) => {
    setInviteData(prev => ({ ...prev, [field]: value }))
  }

  const handleGenerateInvite = () => {
    setIsPreview(true)
  }

  const InvitePreview = () => {
    const selectedTheme = themes.find(t => t.id === inviteData.theme)
    
    return (
      <Card className="max-w-md mx-auto">
        <div className={`bg-gradient-to-br ${selectedTheme.colors} text-white p-8 rounded-2xl text-center`}>
          <h1 className="text-3xl font-bold mb-4">{inviteData.eventName || "Your Event"}</h1>
          <div className="space-y-3 text-lg">
            <p>Hosted by: {inviteData.hostName || "Your Name"}</p>
            <p>📅 {inviteData.date || "Date TBD"}</p>
            <p>🕐 {inviteData.time || "Time TBD"}</p>
            <p>📍 {inviteData.location || "Location TBD"}</p>
          </div>
          {inviteData.message && (
            <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
              <p className="text-sm">{inviteData.message}</p>
            </div>
          )}
          <div className="mt-6 text-sm opacity-90">
            RSVP: [Your Contact Info]
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Invitation</h1>
          <p className="text-xl text-gray-600">
            Design beautiful invitations for your event
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <Card>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Invitation Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    value={inviteData.eventName}
                    onChange={(e) => handleInputChange("eventName", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Sarah's Birthday Party"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Host Name
                  </label>
                  <input
                    type="text"
                    value={inviteData.hostName}
                    onChange={(e) => handleInputChange("hostName", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={inviteData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      value={inviteData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={inviteData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Event venue or address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personal Message
                  </label>
                  <textarea
                    value={inviteData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Add a personal message to your guests..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Theme
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => handleInputChange("theme", theme.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          inviteData.theme === theme.id
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <div className={`w-full h-8 bg-gradient-to-r ${theme.colors} rounded mb-2`}></div>
                        <span className="text-sm font-medium">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerateInvite}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Generate Invitation
                </button>
              </div>
            </Card>
          </div>

          {/* Preview Section */}
          <div>
            <Card>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Preview</h2>
              
              {isPreview ? (
                <InvitePreview />
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-6xl mb-4">📧</div>
                  <p>Fill out the form to see your invitation preview</p>
                </div>
              )}

              {isPreview && (
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Download Invitation
                  </button>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Share via Email
                  </button>
                  <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    Print Invitation
                  </button>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <Link 
            to="/package"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors mr-4"
          >
            Back to Package
          </Link>
          <Link 
            to="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}