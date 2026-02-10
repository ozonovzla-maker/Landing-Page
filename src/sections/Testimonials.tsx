import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Cliente Satisfecho',
    role: 'Usuario Verificado',
    content:
      'Excelente servicio y productos de alta calidad. El generador de ozono funciona perfectamente y el soporte técnico es muy profesional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Profesional de la Salud',
    role: 'Médico',
    content:
      'Llevo 2 años usando sus equipos en mi consulta. La calidad es excepcional y siempre tienen disponibilidad de repuestos.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Cliente Recomendado',
    role: 'Usuario Particular',
    content:
      'Muy buena atención al cliente. Me ayudaron a elegir el equipo adecuado para mis necesidades. Totalmente recomendados.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
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
            TESTIMONIOS
          </span>
          <h2
            id="testimonios-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-4"
          >
            Opiniones de Clientes sobre Nuestros Equipos Médicos
          </h2>
          <p className="text-lg text-oxy-light-grey max-w-2xl mx-auto">
            Opiniones sobre nuestros equipos médicos y la atención en Caracas y Venezuela.
          </p>
        </motion.div>

        {/* Google Reviews Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-card p-8 mb-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google Reviews" 
                width={92}
                height={30}
                loading="lazy"
                decoding="async"
                className="h-8"
              />
              <span className="text-2xl font-bold text-oxy-black">Reviews</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-oxy-orange text-oxy-orange"
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-oxy-black">5.0</span>
              <span className="text-oxy-light-grey">(6 reseñas)</span>
            </div>
            <a
              href="https://share.google/aShq0tEbv8twZ1ZfE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-oxy-blue text-oxy-blue hover:bg-oxy-blue hover:text-white"
              >
                Ver en Google
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 h-full shadow-card relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-oxy-blue rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-oxy-orange text-oxy-orange"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-oxy-black leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-oxy-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-semibold text-oxy-blue">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-oxy-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-oxy-light-grey">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://share.google/aShq0tEbv8twZ1ZfE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-oxy-blue hover:bg-oxy-blue/90 text-white font-semibold px-8"
            >
              Ver Todas las Reseñas en Google
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
