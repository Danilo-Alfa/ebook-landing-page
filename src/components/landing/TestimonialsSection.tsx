import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SpotlightCard from "@/components/ui/spotlight-card";

const testimonials = [
  {
    name: "[Nome da Cliente 1]",
    role: "[Cidade/Estado]",
    content: "Eu tinha medo de começar porque não tinha experiência. Em menos de 2 semanas depois de estudar o guia, já fiz minha primeira cliente! O método é muito claro e direto.",
    rating: 5,
  },
  {
    name: "[Nome da Cliente 2]",
    role: "[Cidade/Estado]",
    content: "Já trabalhava na área há 3 anos, mas sentia que faltava algo. Esse guia me mostrou técnicas que eu nunca tinha visto. Minhas clientes notaram a diferença na hora!",
    rating: 5,
  },
  {
    name: "[Nome da Cliente 3]",
    role: "[Cidade/Estado]",
    content: "Melhor investimento que fiz na minha carreira. A Vera explica de um jeito que qualquer pessoa entende. Valeu cada centavo e muito mais!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        animate={{
          x: [0, 30, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-0 w-72 h-72 bg-gold rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-0 w-64 h-64 bg-whatsapp rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Veja Quem Já{" "}
            <span className="text-gradient-gold">Transformou Sua Carreira</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Profissionais como você que decidiram dar o primeiro passo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                className="h-full"
              >
                <SpotlightCard className="h-full rounded-2xl">
                  <div className="group h-full p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 relative overflow-hidden">
                    {/* Quote decoration */}
                    <div className="absolute -top-2 -left-2 text-6xl text-gold/10 font-serif select-none">
                      "
                    </div>

                    <div className="relative z-10">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                          >
                            <Star className="w-5 h-5 text-gold fill-gold" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="pt-4 border-t border-border/50">
                        <p className="font-semibold group-hover:text-gold transition-colors duration-300">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
