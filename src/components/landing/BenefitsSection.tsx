import { Sparkles, Target, TrendingUp, Award, Clock, Heart } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Técnicas Profissionais",
    description: "[Aprenda as técnicas usadas pelas melhores profissionais do mercado]",
  },
  {
    icon: TrendingUp,
    title: "Comece do Zero",
    description: "[Passo a passo completo mesmo se você nunca fez uma sobrancelha]",
  },
  {
    icon: Award,
    title: "Certificado",
    description: "[Receba um certificado de conclusão para valorizar seu currículo]",
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "[Acesse o conteúdo quando e onde quiser, para sempre]",
  },
  {
    icon: Sparkles,
    title: "Resultados Rápidos",
    description: "[Comece a atender clientes em poucas semanas]",
  },
  {
    icon: Heart,
    title: "Suporte Exclusivo",
    description: "[Tire suas dúvidas diretamente com a Vera Dias]",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Por que escolher este ebook
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Tudo que você precisa para{" "}
            <span className="text-gradient-gold">se destacar</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-whatsapp/20 to-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
