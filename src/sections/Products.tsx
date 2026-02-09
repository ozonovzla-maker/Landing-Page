import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const products = [
  {
    id: 1,
    name: 'Generador de Ozono Médico',
    description:
      'Generador de ozono de grado médico con pantalla táctil digital. Concentraciones precisas y control total del tratamiento.',
    price: 'Consultar',
    image: '/images/producto-ozono-real.jpg',
    features: [
      'Pantalla táctil digital',
      'Control de concentración',
      'Timer programable',
      'Garantía 2 años',
    ],
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Kit Completo Ozono + Oxígeno',
    description:
      'Kit completo que incluye generador de ozono, cilindro de oxígeno medicinal, regulador y todos los accesorios necesarios.',
    price: 'Consultar',
    image: '/images/producto-kit-real.jpg',
    features: [
      'Incluye todos los accesorios',
      'Cilindro de oxígeno medicinal',
      'Regulador profesional',
      'Listo para usar',
    ],
    badge: 'Más Vendido',
    badgeColor: 'bg-oxy-orange',
  },
  {
    id: 3,
    name: 'Concentrador de Oxígeno',
    description:
      'Concentrador de oxígeno de alta pureza. Ideal para uso médico y terapéutico. Disponible bajo pedido.',
    price: 'Consultar',
    image: '/images/product-oxygen-concentrator.jpg',
    features: [
      'Alta pureza de oxígeno',
      'Flujo regulable',
      'Bajo consumo energético',
      'Bajo pedido',
    ],
    badge: 'Bajo Pedido',
    badgeColor: 'bg-oxy-blue',
  },
];

export function Products() {
  return (
    <section id="productos" className="py-28 bg-white">
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
            CATÁLOGO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-oxy-light-grey max-w-2xl mx-auto">
            Importadora de Concentradores de Ozono y Oxígeno médicos. 
            Equipos en existencia y bajo pedidos. Nos adaptamos a su requerimiento.
          </p>
        </motion.div>

        {/* Products Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.2}
        >
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-oxy-grey h-64">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {product.badge}
                  </div>
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-oxy-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a
                      href="https://wa.me/584143146421"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="bg-white text-oxy-black hover:bg-oxy-orange hover:text-oxy-black"
                      >
                        Consultar por WhatsApp
                      </Button>
                    </a>
                  </motion.div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-medium text-oxy-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-oxy-light-grey text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-oxy-black"
                      >
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-sm text-oxy-light-grey">Precio</span>
                      <p className="text-xl font-semibold text-oxy-blue">
                        {product.price}
                      </p>
                    </div>
                    <a
                      href="https://wa.me/584143146421"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-oxy-blue text-oxy-blue hover:bg-oxy-blue hover:text-white group/btn"
                      >
                        Cotizar
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/584143146421"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-oxy-blue hover:bg-oxy-blue/90 text-white font-semibold px-8"
            >
              Consultar por WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
