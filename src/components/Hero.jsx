import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Shield, TrendingUp, Phone, Mail, MapPin, Clock, Award, CheckCircle } from 'lucide-react'

export default function Hero() {
  const benefits = [
    'Consultoria tributária especializada',
    'Redução legal de impostos',
    'Defesa em processos fiscais',
    'Atendimento personalizado'
  ]

  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Clientes Atendidos' },
    { number: '95%', label: 'Casos de Sucesso' },
    { number: '24h', label: 'Resposta Garantida' }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom section-padding pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2"
              >
                <Award className="w-6 h-6 text-accent-400" />
                <span className="text-accent-400 font-semibold text-lg">Advocacia Especializada</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Direito 
                <span className="block text-gradient bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                  Tributário
                </span>
                Especializado
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-blue-100 leading-relaxed max-w-2xl"
              >
                Proteja seu patrimônio e otimize sua carga tributária com estratégias jurídicas comprovadas. 
                Mais de 10 anos defendendo os direitos dos contribuintes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0" />
                  <span className="text-blue-100 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consulta Gratuita
              </motion.button>
              
              <motion.a
                href="tel:(55)44991-0407"
                className="btn-secondary bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                (55) 44991-0407
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-accent-400">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full flex items-center justify-center">
                <Scale className="w-12 h-12 text-white" />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Atendimento Personalizado</h3>
                  <p className="text-blue-200">Análise completa da sua situação tributária</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-blue-100">
                    <MapPin className="w-5 h-5 text-accent-400" />
                    <span>Padre Lebret 801 G05 Bloco 03</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-blue-100">
                    <Clock className="w-5 h-5 text-accent-400" />
                    <span>Atendimento 24/7</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-blue-100">
                    <Mail className="w-5 h-5 text-accent-400" />
                    <span>ffbrunoff@yahoo.com.br</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-accent-400" />
                    <div>
                      <div className="text-white font-semibold">Consultoria Segura</div>
                      <div className="text-blue-200 text-sm">Sigilo profissional garantido</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/60 text-center"
        >
          <div className="text-sm mb-2">Role para saber mais</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}