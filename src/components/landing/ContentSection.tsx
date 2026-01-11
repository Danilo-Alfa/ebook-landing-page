import { CheckCircle2 } from "lucide-react";

const modules = [
  {
    title: "Módulo 1: Fundamentos",
    items: [
      "[Introdução ao design de sobrancelhas]",
      "[Anatomia facial e tipos de rosto]",
      "[Materiais e ferramentas essenciais]",
    ],
  },
  {
    title: "Módulo 2: Técnicas Básicas",
    items: [
      "[Medição e mapeamento de sobrancelhas]",
      "[Técnicas de depilação com pinça]",
      "[Técnica com linha (threading)]",
    ],
  },
  {
    title: "Módulo 3: Técnicas Avançadas",
    items: [
      "[Design personalizado para cada cliente]",
      "[Correção de falhas e assimetrias]",
      "[Harmonização com o rosto]",
    ],
  },
  {
    title: "Módulo 4: Negócio",
    items: [
      "[Como precificar seus serviços]",
      "[Atendimento ao cliente]",
      "[Marketing no Instagram e WhatsApp]",
    ],
  },
];

const ContentSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute top-40 right-0 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-whatsapp text-sm font-semibold tracking-wider uppercase">
            Conteúdo do Ebook
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            O que você vai <span className="text-gradient-gold">aprender</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            [Descrição breve sobre a estrutura do ebook e como ele foi organizado 
            para facilitar seu aprendizado]
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-whatsapp/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-whatsapp to-whatsapp-dark flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </span>
                <h3 className="text-xl font-display font-semibold">
                  {module.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-whatsapp shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
