'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div 
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed bottom-0 left-0 max-w-3xl right-0 bg-white shadow-lg p-6 md:p-8 z-50 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="cookie-title" className="text-xl font-semibold mb-4">
          🍪 Utilizamos cookies
        </h2>
        <p className="text-gray-600 mb-6">
          Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site. 
          Ao clicar em &quot;Aceitar&quot;, você concorda com o uso de TODOS os cookies. 
          Você pode visitar nossa{' '}
          <Link 
            href="/institucional/politica-de-cookies"
            className="text-blue-600 hover:text-blue-800 underline"
            tabIndex={0}
          >
            Política de Cookies
          </Link>{' '}
          para saber mais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            tabIndex={0}
          >
            Aceitar
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition-colors"
            tabIndex={0}
          >
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent