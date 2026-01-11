import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const GuaranteeSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative elements - hidden on mobile for better performance */}
      {!isMobile && (
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
          style={{
            background: "conic-gradient(from 0deg, transparent, #25D366, transparent, #D4AF37, transparent)",
          }}
        />
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-whatsapp/20 to-gold/20 flex items-center justify-center relative"
          >
            {/* Animated ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-2 border-gold/30"
            />
            <Shield className="w-12 h-12 text-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Você Não Tem{" "}
            <span className="text-gradient-gold">Nada a Perder</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground mb-4"
          >
            <strong className="text-foreground">O risco é todo nosso.</strong> Se em 7 dias você
            sentir que o conteúdo não é para você, basta enviar um e-mail que devolvemos
            100% do seu investimento. Sem perguntas, sem burocracia, sem letras miúdas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Por que fazemos isso? Porque temos <strong className="text-foreground">certeza absoluta</strong> de
            que este guia vai transformar sua carreira. A Vera colocou 18 anos de experiência
            neste material — se não fosse bom, ela não colocaria o nome dela.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-whatsapp/30 bg-whatsapp/5 text-whatsapp backdrop-blur-sm"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              🛡️
            </motion.span>
            <span className="font-semibold">Compra 100% Segura</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
