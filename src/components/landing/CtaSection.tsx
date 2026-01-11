import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpg";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ebook */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp/20 to-gold/20 rounded-2xl blur-2xl animate-pulse-glow" />
                <img
                  src={ebookCover}
                  alt="Ebook Design de Sobrancelhas"
                  className="relative w-64 rounded-xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* CTA Content */}
            <div className="text-center md:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Comece sua jornada <span className="text-gradient-gold">agora</span>
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-whatsapp text-xl">✓</span>
                  <span>Ebook completo em PDF</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-whatsapp text-xl">✓</span>
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-whatsapp text-xl">✓</span>
                  <span>Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-whatsapp text-xl">✓</span>
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-muted-foreground mb-2">
                  <span className="line-through">De R$ XXX,XX</span>
                </p>
                <p className="text-4xl font-display font-bold text-gradient-gold mb-6">
                  Por apenas R$ XX,XX
                </p>
                
                <Button variant="cta" size="xl" className="w-full md:w-auto">
                  Quero Garantir Meu Acesso
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Pagamento 100% seguro via Hotmart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
