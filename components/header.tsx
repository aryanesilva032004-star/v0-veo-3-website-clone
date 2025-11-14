"use client"

import { useState } from "react"
import { Zap, Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas')
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed w-full z-50 transition-all duration-300 bg-black bg-opacity-90 backdrop-blur-md py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Zap className="text-cyan-400 mr-2" size={24} />
              <span className="font-orbitron font-bold text-white text-xl">
                PACK<span className="text-cyan-400">VEO4</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={scrollToOffers}
                className="font-rajdhani font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Ofertas
              </button>
              <button 
                onClick={scrollToPricing}
                className="font-orbitron font-bold px-6 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
              >
                Comprar Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-md pt-20">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <button 
                onClick={scrollToOffers}
                className="font-rajdhani font-medium text-gray-300 hover:text-cyan-400 transition-colors text-left py-3 text-lg"
              >
                Ofertas
              </button>
              <button 
                onClick={scrollToPricing}
                className="font-orbitron font-bold px-6 py-3 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors text-lg"
              >
                Comprar Agora
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
