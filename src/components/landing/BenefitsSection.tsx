import { Clock, Target, TrendingUp, Award, DollarSign, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SpotlightCard from "@/components/ui/spotlight-card";

const benefits = [
  {
    icon: Clock,
    title: "Resultados em 12 Horas",
    description: "Não espere meses para começar a lucrar. Em apenas 12 horas de estudo, você já pode aplicar tudo",
  },
  {
    icon: Target,
    title: "Mesmo Sem Experiência",
    description: "Criado para quem está começando do zero. Passo a passo simples que qualquer pessoa consegue seguir",
  },
  {
    icon: DollarSign,
    title: "Comece a Faturar Rápido",
    description: "Técnicas prontas para você usar e começar a atender clientes logo após o estudo",
  },
  {
    icon: TrendingUp,
    title: "Diferencie-se no Mercado",
    description: "Aprenda o que 90% das profissionais não sabem: técnicas atualizadas e princípios éticos que fidelizam",
  },
  {
    icon: Award,
    title: "Aula Gravada Exclusiva",
    description: "Não é só teoria. Você terá acesso a demonstrações práticas em vídeo para aprender vendo fazer",
  },
  {
    icon: ShieldCheck,
    title: "Risco Zero",
    description: "Se em 7 dias você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5"
        style={{
          background: "conic-gradient(from 0deg, transparent, #D4AF37, transparent, #25D366, transparent)",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Por que este guia é diferente?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Pare de Perder Tempo e Dinheiro com{" "}
            <span className="text-gradient-gold">Cursos que Não Funcionam</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Chega de teoria sem prática. Este guia foi criado para quem quer resultados reais,
            no menor tempo possível.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
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
                  <div className="group h-full p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 relative">
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-whatsapp/20 to-gold/20 flex items-center justify-center mb-4 group-hover:from-whatsapp/30 group-hover:to-gold/30 transition-all duration-300"
                      >
                        <benefit.icon className="w-7 h-7 text-gold" />
                      </motion.div>
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
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

export default BenefitsSection;
