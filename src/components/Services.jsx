import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, Shield, FileText, TrendingUp, Scale, AlertTriangle, CheckCircle, DollarSign, BookOpen, Users, Phone, ArrowRight } from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Calculator,
      title: 'Planejamento Tributário',
      description: 'Estratégias personalizadas para reduzir legalmente sua carga tributária e otimizar resultados.',
      features: ['Análise fiscal completa', 'Elisão fiscal', 'Reestruturação societária', 'Regime tributário ideal'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Defesa Fiscal',
      description: 'Representação em processos administrativos e judiciais, protegendo seus interesses.',
      features: ['Contestação de autuações', 'Recursos administrativos', 'Defesa judicial', 'Parcelamento de débitos'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Recuperação de Tributos',
      description: 'Identificação e recuperação de valores pagos indevidamente ao fisco.',
      features: ['Compensação tributária', 'Restituição de impostos', 'Créditos fiscais', 'Prescrição intercorrente'],
      gradient: 'from-purple-500 to-purple-600'
    }
  ]

  const complementaryServices = [
    {
      icon: FileText,
      title: 'Consultoria Fiscal Permanente',
      description: 'Acompanhamento contínuo das obrigações tributárias'
    },
    {
      icon: TrendingUp,
      title: 'Due Diligence Tributária',
      description: 'Análise de riscos fiscais em operações empresariais'
    },
    {
      icon: BookOpen,
      title: 'Treinamento Tributário',
      description: 'Capacitação de equipes em matéria fiscal'
    },
    {
      icon: Users,
      title: 'Assessoria Societária',
      description: 'Estruturação legal de empresas e holdings'
    },
    {
      icon: AlertTriangle,
      title: 'Regularização Fiscal',
      description: 'Solução de pendências com a Receita Federal'
    },
    {
      icon: Scale,
      title: 'Contencioso Tributário',
      description: 'Litígios complexos em todas as instâncias'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Análise Inicial',
      description: 'Diagnóstico completo da situação tributária atual'
    },
    {
      number: '02', 
      title: 'Estratégia Personalizada',
      description: 'Desenvolvimento de plano de ação específico'
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Execução das medidas planejadas com acompanhamento'
    },
    {
      number: '04',
      title: 'Monitoramento',
      description: 'Avaliação contínua dos resultados obtidos'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
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
            <span className="text-primary-600 font-semibold text-lg">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas em
            <span className="text-gradient"> Direito Tributário</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio abrangente de serviços tributários para empresas e pessoas físicas, 
            sempre focando na máxima economia fiscal dentro da legalidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 card-hover group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={scrollToContact}
                  className="w-full btn-primary group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serviços Complementares
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Amplo leque de serviços especializados para atender todas suas necessidades tributárias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complementaryServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 lg:p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Metodologia comprovada para garantir os melhores resultados em cada caso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  {step.title}
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-accent-400 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Precisa de Consultoria Especializada?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Agende uma consulta gratuita e descubra como podemos otimizar sua situação tributária. 
              Nossa equipe está pronta para analisar seu caso e apresentar as melhores soluções.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToContact}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consulta Gratuita
              </motion.button>
              
              <motion.a
                href="tel:(55)44991-0407"
                className="btn-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                (55) 44991-0407
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}