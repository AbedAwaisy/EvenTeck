import { useState } from "react"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-purple-600 hover:bg-purple-700"
        } text-white flex items-center justify-center`}
        title={isOpen ? "Close Chatbot" : "Open Event Planning Chatbot"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[420px] h-[700px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Chatbot Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Event Planning Assistant</h3>
                <p className="text-xs text-purple-100">I'll help you plan your perfect event</p>
              </div>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chatbot Iframe */}
          <div className="h-[calc(100%-60px)]">
            <iframe
              src="https://n8n.srv940278.hstgr.cloud/webhook/a79d80bc-fd42-4894-a767-db05a76d6bd6/chat"
              className="w-full h-full border-0"
              title="Event Planning Chatbot"
              allow="microphone; camera; fullscreen"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              style={{ minHeight: '640px' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
