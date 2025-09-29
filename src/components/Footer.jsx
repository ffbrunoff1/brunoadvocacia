import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const services = [
    'Planejamento Tributário',
    'Defesa em Autuações Fiscais',
    'Recuperação de Tributos',
    'Consultoria Permanente',
    'Regularização Fiscal',
    'Contencioso Tributário'
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(55) 44991-0407',
      link: 'tel:(55)44991-0407'
    },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      link: 'mailto:ffbrunoff@yahoo.com.br'
    },
    {
      icon: MapPin,
      text: 'Padre Lebret 801 G05 Bloco 03',
      link: '#'
    },
    {
      icon: Clock,
      text: 'Seg - Sex: 8h às 18h',
      link: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pb-20">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Bruno Advocacia</h3>
                  <p className="text-primary-400 text-sm">Direito Tributário</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Especialista em Direito Tributário com mais de 10 anos de experiência, 
                oferecendo soluções jurídicas especializadas para otimizar sua carga tributária.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary-400">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-sm">Consultoria especializada</span>
                </div>
                <div className="flex items-center space-x-3 text-primary-400">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-sm">Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3 text-primary-400">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-sm">Resultados comprovados</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-primary-400 transition-colors"></div>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                        >
                          {item.text}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-4 bg-primary-600/10 rounded-2xl border border-primary-600/20">
                <h5 className="text-primary-400 font-semibold mb-2">Emergência Tributária?</h5>
                <p className="text-gray-300 text-sm mb-3">
                  Atendimento 24h para casos urgentes
                </p>
                <a
                  href="tel:(55)44991-0407"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Bruno Advocacia. Todos os direitos reservados.
              </div>
              
              <div className="text-gray-400 text-sm">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}