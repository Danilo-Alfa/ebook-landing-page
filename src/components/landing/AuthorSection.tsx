import authorPhoto from "@/assets/author-photo.jpg";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const AuthorSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-whatsapp/30 to-transparent" />

      {/* Decorative elements - hidden on mobile for performance */}
      {!isMobile && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl"
        />
      )}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-2 lg:order-1 pb-12 lg:pb-4"
          >
            <div className="relative lg:flex lg:flex-col lg:items-center">
              {/* Glow - static on mobile for performance */}
              {isMobile ? (
                <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp/20 to-gold/20 rounded-full blur-xl" />
              ) : (
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-whatsapp/30 to-gold/30 rounded-full blur-2xl"
                />
              )}
              <img
                src={authorPhoto}
                alt="Vera Dias"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-gold/30"
              />
              {/* Experience badge - positioned below photo */}
              <motion.div
                initial={{ scale: 0, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:relative lg:bottom-auto lg:left-auto lg:translate-x-0 lg:mt-8 bg-gradient-to-r from-gold to-gold-dark text-accent-foreground px-4 md:px-6 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap text-sm md:text-base"
              >
                +18 anos de experiência
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-gold text-sm font-semibold tracking-wider uppercase"
            >
              Sua Mentora
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              Quem Vai Te Guiar Nessa{" "}
              <span className="text-gradient-gold">Transformação</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-muted-foreground"
            >
              <p className="text-foreground font-medium">
                Vera Dias não é apenas uma profissional — ela é referência na Grande São Paulo,
                com clientes que recusam qualquer outro atendimento há mais de uma década.
              </p>
              <p>
                Com <strong className="text-foreground">18 anos de experiência prática</strong>,
                formação em <strong className="text-foreground">Psicanálise</strong> e diversos
                diplomas na área da beleza, Vera desenvolveu um método único que une técnica,
                ética profissional e visão de negócio.
              </p>
              <p>
                Agora, ela decidiu compartilhar tudo o que sabe — o mesmo conhecimento que
                construiu sua reputação impecável — para que você também possa conquistar
                sua independência financeira e realizar o sonho de viver da profissão que ama.
              </p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-foreground italic border-l-2 border-gold pl-4 bg-gold/5 py-3 rounded-r-lg"
              >
                "Eu sei como é começar com medo e incerteza. Por isso criei este guia: para
                você não cometer os mesmos erros que eu cometi e chegar lá muito mais rápido."
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://instagram.com/Vdhair_ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-whatsapp hover:text-whatsapp-dark transition-colors font-medium group"
              >
                <span className="group-hover:underline">Siga @Vdhair_ofc no Instagram</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
