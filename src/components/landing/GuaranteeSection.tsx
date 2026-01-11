import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-whatsapp/20 to-gold/20 flex items-center justify-center">
            <Shield className="w-10 h-10 text-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Garantia de <span className="text-gradient-gold">7 Dias</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            [Texto explicando a garantia incondicional de 7 dias. Se por qualquer 
            motivo você não ficar satisfeita com o conteúdo, basta solicitar o 
            reembolso que devolvemos 100% do seu investimento, sem perguntas.]
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-whatsapp/30 bg-whatsapp/5 text-whatsapp">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold">Compra 100% Segura</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
