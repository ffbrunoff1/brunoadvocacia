import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
              isScrolled ? 'bg-primary-600' : 'bg-white'
            } shadow-lg transition-all duration-300`}>
              <Scale className={`w-7 h-7 ${
                isScrolled ? 'text-white' : 'text-primary-600'
              }`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Bruno Advocacia
              </h1>
              <p className={`text-sm transition-all duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-blue-200'
              }`}>
                Direito Tributário
              </p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 ml-8">
              <motion.a
                href="tel:(55)44991-0407"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-primary-50 text-primary-600 hover:bg-primary-100' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(55) 44991-0407</span>
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Consulta Gratuita
              </motion.button>
            </div>
          </nav>

          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="pt-4 space-y-3">
                <a
                  href="tel:(55)44991-0407"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>(55) 44991-0407</span>
                </a>
                
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full"
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Gratuita
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}