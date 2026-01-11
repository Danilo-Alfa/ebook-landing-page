import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-whatsapp/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/5">
              <span className="text-gold text-sm font-medium">
                🎯 Curso completo para iniciantes
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Domine a Arte do{" "}
              <span className="text-gradient-gold">Design de Sobrancelhas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              [Texto sobre como o ebook vai transformar sua carreira como designer de sobrancelhas, 
              mesmo sendo iniciante]
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="xl">
                Quero Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10">
                Ver Conteúdo Completo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-whatsapp">✓</span>
                Acesso imediato
              </div>
              <div className="flex items-center gap-2">
                <span className="text-whatsapp">✓</span>
                7 dias de garantia
              </div>
            </div>
          </div>
          
          {/* Ebook mockup */}
          <div className="relative flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp/20 to-gold/20 rounded-2xl blur-2xl" />
              <img
                src={ebookCover}
                alt="Ebook Design de Sobrancelhas"
                className="relative w-80 md:w-96 rounded-xl shadow-2xl glow-gold"
              />
              {/* Price badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold to-gold-dark text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                R$ XX,XX
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
