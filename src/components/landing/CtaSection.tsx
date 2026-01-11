import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpg";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  { title: "E-book Completo", desc: "Método de 18 anos resumido" },
  { title: "Aula Gravada", desc: "Veja a Vera aplicando as técnicas" },
  { title: "Material de Revisão", desc: "Consulte sempre que precisar" },
  { title: "Acesso Vitalício", desc: "Pague uma vez, acesse para sempre" },
  { title: "Garantia Total", desc: "7 dias para testar sem risco" },
];

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-whatsapp rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ebook with 3D effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Tilt
                tiltMaxAngleX={isMobile ? 0 : 15}
                tiltMaxAngleY={isMobile ? 0 : 15}
                perspective={1000}
                scale={isMobile ? 1 : 1.05}
                transitionSpeed={2000}
                glareEnable={!isMobile}
                glareMaxOpacity={0.3}
                glareColor="#D4AF37"
                glarePosition="all"
                glareBorderRadius="12px"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-4 bg-gradient-to-r from-whatsapp/30 to-gold/30 rounded-2xl blur-2xl"
                  />
                  <img
                    src={ebookCover}
                    alt="E-book Guia Completo de Tratamentos Capilares e Estéticos"
                    className="relative w-64 rounded-xl shadow-2xl"
                  />
                </div>
              </Tilt>
            </motion.div>

            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left space-y-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 mb-2"
              >
                <span className="text-red-400 text-sm font-medium">
                  Oferta por tempo limitado
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Essa é Sua Chance de{" "}
                <span className="text-gradient-gold">Mudar de Vida</span>
              </h2>

              <p className="text-muted-foreground">
                Daqui a 1 ano, você vai se arrepender de não ter começado hoje.
              </p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="flex items-center gap-3 justify-center md:justify-start group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-whatsapp text-xl"
                    >
                      ✓
                    </motion.span>
                    <span>
                      <strong className="group-hover:text-gold transition-colors duration-300">
                        {feature.title}
                      </strong>{" "}
                      — {feature.desc}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <motion.p
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2 leading-normal pb-1"
                >
                  R$ 54,90
                </motion.p>
                <p className="text-sm text-muted-foreground mb-6">
                  ou 7x de R$ 8,98 no cartão
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="cta" size="xl" className="w-full md:w-auto group relative overflow-hidden" asChild>
                    <a href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-design-de-sobrancelha-profissional-5f4p5/S101809237D" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">Sim! Quero Começar Agora</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </Button>
                </motion.div>

                <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center md:justify-start gap-2">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-whatsapp"
                  >
                    🔒
                  </motion.span>
                  Compra 100% segura via Hotmart
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
