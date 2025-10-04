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
        className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-3xl shadow-cultural transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? "bg-gradient-to-br from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600" 
            : "bg-gradient-cultural hover:shadow-gold"
        } text-white flex items-center justify-center`}
        title={isOpen ? "إغلاق المحادثة" : "فتح مساعد تخطيط الأحداث"}
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
        <div className="fixed bottom-28 left-6 z-40 w-[450px] h-[750px] bg-white/98 backdrop-blur-md rounded-3xl shadow-elegant border-2 border-amber-300/60 overflow-hidden animate-slide-in-right">
          {/* Chatbot Header */}
          <div className="bg-gradient-cultural text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
                <div>
                  <h3 className="font-bold text-base">مساعد تخطيط الأحداث</h3>
                  <p className="text-xs text-white/80">سأساعدك في تخطيط حدثك المثالي</p>
                </div>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-white/80 transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chatbot Iframe */}
          <div className="h-[calc(100%-70px)] bg-white">
            <iframe
              src="https://n8n.srv940278.hstgr.cloud/webhook/a79d80bc-fd42-4894-a767-db05a76d6bd6/chat"
              className="w-full h-full border-0 rounded-b-3xl"
              title="مساعد تخطيط الأحداث"
              allow="microphone; camera; fullscreen; autoplay; clipboard-read; clipboard-write"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals allow-downloads"
              style={{ 
                minHeight: '680px',
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none'
              }}
              loading="eager"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
