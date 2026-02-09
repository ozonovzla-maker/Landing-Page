import { motion } from 'framer-motion';
import { Zap, Syringe, HeartPulse, Sparkles } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const steps = [
  {
    number: '01',
    icon: Zap,
    title: 'Generación',
    description:
      'El equipo genera ozono (O3) a partir de oxígeno molecular (O2) mediante descarga eléctrica controlada y segura.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    number: '02',
    icon: Syringe,
    title: 'Aplicación',
    description:
      'El ozono se aplica de forma segura según el protocolo médico indicado para cada tratamiento específico.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    number: '03',
    icon: HeartPulse,
    title: 'Beneficios',
    description:
      'El ozono actúa como potente desinfectante, antiinflamatorio y regenerador celular natural.',
    color: 'bg-red-100 text-red-600',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Resultados',
    description:
      'Mejora en la calidad de vida y bienestar general del paciente con tratamientos probados.',
    color: 'bg-green-100 text-green-600',
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-oxy-blue/10 text-oxy-blue text-sm font-semibold rounded-full mb-4">
            PROCESO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-4">
            ¿Cómo Funciona el Ozono?
          </h2>
          <p className="text-lg text-oxy-light-grey max-w-2xl mx-auto">
            El ozono es una forma alotrópica del oxígeno con propiedades
            terapéuticas extraordinarias. Conoce el proceso paso a paso.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer className="relative" staggerDelay={0.2}>
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-oxy-azure via-oxy-blue to-oxy-azure" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      duration: 0.5,
                      type: 'spring',
                    }}
                    className="relative z-10 w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-oxy-azure"
                  >
                    <span className="text-2xl font-heading font-bold text-oxy-blue">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-medium text-oxy-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-oxy-light-grey leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Info box */}
        <AnimatedSection delay={0.6} className="mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-oxy-azure rounded-2xl p-8 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-heading font-medium text-oxy-black mb-3">
              ¿Sabías que?
            </h3>
            <p className="text-oxy-light-grey">
              El ozono es <span className="font-semibold text-oxy-blue">3,000 veces más efectivo</span> que el cloro como
              desinfectante, y se transforma naturalmente en oxígeno puro (O2)
              después de realizar su función, sin dejar residuos tóxicos.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
