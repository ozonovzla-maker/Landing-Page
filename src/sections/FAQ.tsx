import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';

const faqs = [
  {
    question: '¿Qué equipos ofrecen?',
    answer:
      'Ofrecemos generadores de ozono médico, kits completos de ozono con oxígeno y concentradores de oxígeno para uso médico y terapéutico.',
  },
  {
    question: '¿Tienen equipos en existencia?',
    answer:
      'Sí. Contamos con inventario disponible para entrega inmediata y también trabajamos bajo pedido según el requerimiento del cliente.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer:
      'Sí. Todos nuestros equipos cuentan con garantía de 2 años con cobertura de repuestos.',
  },
  {
    question: '¿Dónde están ubicados?',
    answer:
      'Estamos en Edificio La Linea, Av. Libertador, Caracas 1052, Distrito Capital, Venezuela.',
  },
  {
    question: '¿Cómo puedo cotizar?',
    answer:
      'Puedes cotizar por WhatsApp al +58 414-3146421 o escribir a ozonovnzla@gmail.com.',
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-oxy-blue/10 text-oxy-blue text-sm font-semibold rounded-full mb-4">
            PREGUNTAS FRECUENTES
          </span>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-4"
          >
            Respuestas Rápidas Antes de Cotizar
          </h2>
          <p className="text-lg text-oxy-light-grey">
            Resolvemos las dudas más comunes sobre equipos de ozono y oxígeno médicos.
          </p>
        </AnimatedSection>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-oxy-azure/40 p-6 shadow-card"
            >
              <h3 className="text-xl font-heading font-medium text-oxy-black mb-2">
                {faq.question}
              </h3>
              <p className="text-oxy-light-grey leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
