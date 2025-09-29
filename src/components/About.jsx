import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Award, Users, TrendingUp, Shield, BookOpen, Briefcase, CheckCircle, Star, Target } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: 'Especialização Reconhecida',
      description: 'Pós-graduação em Direito Tributário pela renomada instituição de ensino superior',
      stats: '10+ Anos'
    },
    {
      icon: Users,
      title: 'Clientes Satisfeitos',
      description: 'Empresas e pessoas físicas que confiam em nossa expertise tributária',
      stats: '500+ Clientes'
    },
    {
      icon: TrendingUp,
      title: 'Economia Fiscal',
      description: 'Em impostos economizados para nossos clientes através de estratégias legais',
      stats: 'R$ 2M+'
    },
    {
      icon: Shield,
      title: 'Casos de Sucesso',
      description: 'Taxa de sucesso em processos administrativos e judiciais tributários',
      stats: '95% Sucesso'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excelência Técnica',
      description: 'Conhecimento aprofundado da legislação tributária sempre atualizado'
    },
    {
      icon: Shield,
      title: 'Transparência Total',
      description: 'Comunicação clara sobre estratégias, custos e resultados esperados'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individual e soluções sob medida'
    },
    {
      icon: Star,
      title: 'Resultados Comprovados',
      description: 'Histórico sólido de conquistas e economia fiscal para nossos clientes'
    }
  ]

  const expertise = [
    'Planejamento Tributário Estratégico',
    'Consultoria em Impostos Federais, Estaduais e Municipais',
    'Defesa em Autuações Fiscais',
    'Recursos Administrativos e Judiciais',
    'Compensação e Restituição de Tributos',
    'Elisão Fiscal Empresarial',
    'Regularização de Pendências Tributárias',
    'Assessoria em Fusões e Aquisições'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            <span className="text-primary-600 font-semibold text-lg">Sobre Bruno Advocacia</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expertise em 
            <span className="text-gradient"> Direito Tributário</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de uma década de experiência, oferecemos soluções jurídicas especializadas 
            para otimizar a carga tributária de nossos clientes, sempre dentro da legalidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprometimento com a Excelência
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Bruno Advocacia nasceu da necessidade de oferecer consultoria tributária 
                de alta qualidade, combinando conhecimento técnico aprofundado com 
                atendimento humanizado e personalizado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é proteger o patrimônio de nossos clientes através de 
                estratégias tributárias eficientes, sempre respeitando os princípios 
                éticos da advocacia e a legislação vigente.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Áreas de Especialização:
              </h4>
              <div className="grid gap-3">
                {expertise.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Dr. Bruno Silva
                  </h4>
                  <p className="text-primary-600 font-semibold mb-4">
                    Especialista em Direito Tributário
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Formação Acadêmica</p>
                      <p className="text-gray-600 text-sm">Pós-graduação em Direito Tributário</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Certificações</p>
                      <p className="text-gray-600 text-sm">OAB - Ordem dos Advogados do Brasil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Experiência</p>
                      <p className="text-gray-600 text-sm">Mais de 10 anos em Direito Tributário</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {achievement.stats}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que norteiam nossa atuação e garantem o melhor serviço aos nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}