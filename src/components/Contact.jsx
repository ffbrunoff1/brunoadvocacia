import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Scale, Calendar } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setStatus({ message: 'Enviando mensagem...', isError: false })
      
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "ffbrunoff@yahoo.com.br",
        "token": token
      }
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      if (response.ok) {
        setStatus({ 
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
          isError: false 
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.', 
        isError: true 
      })
    }
    
    recaptchaRef.current.reset()
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(55) 44991-0407',
      link: 'tel:(55)44991-0407',
      description: 'Atendimento personalizado'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'ffbrunoff@yahoo.com.br',
      link: 'mailto:ffbrunoff@yahoo.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Padre Lebret 801 G05 Bloco 03',
      link: '#',
      description: 'Atendimento presencial'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg - Sex: 8h às 18h',
      link: '#',
      description: 'Plantão 24h para urgências'
    }
  ]

  const services = [
    'Planejamento Tributário',
    'Defesa em Autuações Fiscais', 
    'Recuperação de Tributos',
    'Consultoria Permanente',
    'Regularização Fiscal',
    'Contencioso Tributário'
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Scale className="w-12 h-12 text-primary-600 mr-3" />
            <span className="text-primary-600 font-semibold text-lg">Entre em Contato</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agende sua
            <span className="text-gradient"> Consulta Gratuita</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para analisar sua situação tributária e apresentar as melhores soluções 
            para seu caso específico. Entre em contato conosco hoje mesmo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <a 
                          href={item.link}
                          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        >
                          {item.info}
                        </a>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Como Podemos Ajudar?
              </h3>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-blue-100">{service}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-5 h-5 text-accent-400" />
                  <span className="font-semibold">Consulta Gratuita</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Primeira consulta totalmente gratuita para análise do seu caso
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(55) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="Planejamento Tributário">Planejamento Tributário</option>
                    <option value="Defesa Fiscal">Defesa Fiscal</option>
                    <option value="Recuperação de Tributos">Recuperação de Tributos</option>
                    <option value="Consultoria Permanente">Consultoria Permanente</option>
                    <option value="Regularização Fiscal">Regularização Fiscal</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva sua situação ou dúvida sobre direito tributário..."
                  ></textarea>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </motion.button>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Atendimento Diferenciado
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Resposta Rápida
              </h4>
              <p className="text-gray-600 text-sm">
                Retornamos seu contato em até 24 horas
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Plantão 24h
              </h4>
              <p className="text-gray-600 text-sm">
                Emergências tributárias atendidas a qualquer hora
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Consulta Gratuita
              </h4>
              <p className="text-gray-600 text-sm">
                Primeira consulta sem compromisso
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}