import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SpotlightCard from "@/components/ui/spotlight-card";
import { useIsMobile } from "@/hooks/use-mobile";

const modules = [
  {
    title: "Base Sólida",
    subtitle: "O alicerce do sucesso",
    items: [
      "Princípios éticos que te diferenciam da concorrência",
      "Fundamentos que profissionais de 10+ anos dominam",
      "A mentalidade certa para crescer na profissão",
    ],
  },
  {
    title: "Técnicas que Vendem",
    subtitle: "O que os clientes mais pedem",
    items: [
      "Procedimentos mais lucrativos do mercado atual",
      "Técnicas atualizadas que poucos conhecem",
      "Segredos para fidelizar clientes na primeira sessão",
    ],
  },
  {
    title: "Aula Prática em Vídeo",
    subtitle: "Aprenda vendo fazer",
    items: [
      "Demonstração passo a passo sem enrolação",
      "Veja exatamente como aplicar cada técnica",
      "Revise quantas vezes precisar, para sempre",
    ],
  },
  {
    title: "Seu Negócio Lucrativo",
    subtitle: "Da técnica ao dinheiro no bolso",
    items: [
      "Como precificar para lucrar de verdade",
      "Estratégias para atrair clientes todos os dias",
      "O caminho mais rápido para sua independência",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const ContentSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="conteudo" className="py-20 relative overflow-hidden">
      {/* Animated background - hidden on mobile for performance */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-40 right-0 w-96 h-96 bg-whatsapp/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
          />
        </>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-whatsapp text-sm font-semibold tracking-wider uppercase">
            O que está incluso
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Veja Tudo Que Você Vai{" "}
            <span className="text-gradient-gold">Dominar</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Em apenas 12 horas, você terá acesso ao mesmo conhecimento que levou
            18 anos para ser construído. Tudo mastigado, organizado e pronto para aplicar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {modules.map((module, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={isMobile ? 0 : 8}
                tiltMaxAngleY={isMobile ? 0 : 8}
                perspective={1000}
                scale={isMobile ? 1 : 1.02}
                transitionSpeed={1500}
                className="h-full"
              >
                <SpotlightCard className="h-full rounded-2xl" spotlightColor="rgba(37, 211, 102, 0.35)" disabled={isMobile}>
                  <div className="group h-full p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-whatsapp/50 transition-all duration-500 hover:shadow-xl hover:shadow-whatsapp/10 relative overflow-hidden">
                    {/* Number decoration */}
                    <div className="absolute -top-4 -right-4 text-8xl font-bold text-whatsapp/5 select-none">
                      {index + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.span
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-whatsapp to-whatsapp-dark flex items-center justify-center text-primary-foreground font-bold shrink-0 shadow-lg shadow-whatsapp/30"
                        >
                          {index + 1}
                        </motion.span>
                        <div>
                          <h3 className="text-xl font-display font-semibold group-hover:text-whatsapp transition-colors duration-300">
                            {module.title}
                          </h3>
                          <p className="text-sm text-gold">{module.subtitle}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {module.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * itemIndex, duration: 0.3 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-whatsapp shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
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

export default ContentSection;
