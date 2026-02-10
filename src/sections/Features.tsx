import { motion } from 'framer-motion';
import { Package, ShieldCheck, Award, Headphones } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const features = [
  {
    icon: Package,
    title: 'Equipos en Existencia',
    description:
      'Inventario disponible para entrega inmediata en Caracas. También trabajamos bajo pedido en toda Venezuela.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad Garantizada',
    description:
      'Equipos médicos confiables para ozonoterapia y oxigenoterapia con respaldo técnico.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Award,
    title: 'Garantía 2 Años',
    description:
      'Garantía de 2 años con cobertura de repuestos y asesoría postventa.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico',
    description:
      'Asesoría personalizada antes y después de la compra para cada requerimiento.',
    color: 'bg-orange-100 text-orange-600',
  },
];

export function Features() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-title"
      className="py-28 bg-oxy-grey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-oxy-blue/10 text-oxy-blue text-sm font-semibold rounded-full mb-4">
            NUESTRAS VENTAJAS
          </span>
          <h2
            id="beneficios-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-4"
          >
            Equipos de Ozono y Oxígeno Médicos con Respaldo Profesional
          </h2>
          <p className="text-lg text-oxy-light-grey max-w-2xl mx-auto">
            Importamos equipos para ozonoterapia y oxigenoterapia con garantía,
            soporte técnico y entrega en Caracas y Venezuela.
          </p>
        </motion.div>

        {/* Features Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.15}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 h-full shadow-card"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-heading font-medium text-oxy-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-oxy-light-grey leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
