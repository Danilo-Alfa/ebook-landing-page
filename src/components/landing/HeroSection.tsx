import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-whatsapp rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm"
            >
              <span className="text-gold text-sm font-medium">
                Método validado por +18 anos no mercado
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              Transforme Sua Carreira na{" "}
              <span className="text-gradient-gold">Área da Beleza</span>{" "}
              em Apenas 12 Horas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Você sente que está ficando para trás enquanto outras profissionais crescem?
              Descubra o método que já transformou a carreira de centenas de profissionais
              — mesmo começando do zero ou com pouco tempo para estudar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="cta" size="xl" asChild className="group relative overflow-hidden px-4">
                <a href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-design-de-sobrancelha-profissional-5f4p5/S101809237D" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 px-1">Quero Transformar Minha Carreira</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10 hover:text-white backdrop-blur-sm text-sm flex items-center justify-center" asChild>
                <a href="#conteudo">
                  Ver o Que Vou Aprender
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              {[
                "Acesso imediato após a compra",
                "Aula gravada exclusiva",
                "Garantia incondicional de 7 dias",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-whatsapp">✓</span>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Ebook mockup with 3D Tilt (disabled on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center pb-6"
          >
            <Tilt
              tiltMaxAngleX={isMobile ? 0 : 15}
              tiltMaxAngleY={isMobile ? 0 : 15}
              perspective={1000}
              scale={isMobile ? 1 : 1.02}
              transitionSpeed={2000}
              gyroscope={false}
              glareEnable={!isMobile}
              glareMaxOpacity={0.3}
              glareColor="#D4AF37"
              glarePosition="all"
              glareBorderRadius="12px"
              className="relative"
            >
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp/30 to-gold/30 rounded-2xl blur-2xl" />
                <img
                  src={ebookCover}
                  alt="E-book Guia Completo de Tratamentos Capilares e Estéticos"
                  className="relative w-80 md:w-96 rounded-xl shadow-2xl"
                />
                {/* Price badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold to-gold-dark text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  R$ 54,90
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
