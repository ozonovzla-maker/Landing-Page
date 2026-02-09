import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CountUp } from '@/components/CountUp';
import { MapPin } from 'lucide-react';

const stats = [
  { value: 4, suffix: '', label: 'Años de Experiencia' },
  { value: 500, suffix: '+', label: 'Clientes Satisfechos' },
  { value: 10, suffix: '+', label: 'Productos Disponibles' },
];

export function About() {
  return (
    <section id="nosotros" className="py-28 bg-oxy-azure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-oxy-orange/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-oxy-blue/20 rounded-full blur-xl" />
              
              <img
                src="/images/producto-kit-real.jpg"
                alt="Productos Ozono Venezuela"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden sm:block"
              >
                <div className="text-center">
                  <span className="text-4xl font-heading font-bold text-oxy-blue">
                    <CountUp end={4} suffix="" />
                  </span>
                  <p className="text-sm text-oxy-light-grey mt-1">
                    Años de<br />Experiencia
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-2 bg-oxy-blue/10 text-oxy-blue text-sm font-semibold rounded-full mb-4">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-6">
                Grupo Tecnológico para La Salud
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-lg text-oxy-light-grey leading-relaxed mb-6">
                Somos <strong>Ozono Venezuela</strong>, importadora de Concentradores de Ozono 
                y Oxígeno médicos al mayor y detal. Con 4 años de experiencia en el mercado 
                venezolano, nos hemos consolidado como referentes en el sector de equipos 
                médicos para ozonoterapia y oxigenoterapia.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <p className="text-lg text-oxy-light-grey leading-relaxed mb-6">
                Contamos con equipos en existencia para entrega inmediata, y también 
                trabajamos bajo pedidos. Nos adaptamos a su requerimiento específico 
                para ofrecerle la mejor solución según sus necesidades.
              </p>
            </AnimatedSection>

            {/* Address */}
            <AnimatedSection direction="right" delay={0.35}>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 mb-8">
                <MapPin className="w-5 h-5 text-oxy-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-oxy-black">Nuestra Ubicación</p>
                  <p className="text-oxy-light-grey text-sm">
                    Edificio La Linea, Av. Libertador, Caracas 1052, Distrito Capital, Venezuela
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center sm:text-left"
                  >
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-oxy-blue">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </span>
                    <p className="text-sm text-oxy-light-grey mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
