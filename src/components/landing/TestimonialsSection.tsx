import { Star } from "lucide-react";

const testimonials = [
  {
    name: "[Nome da Cliente 1]",
    role: "[Profissão/Cidade]",
    content: "[Depoimento sobre como o ebook ajudou ela a começar na carreira de designer de sobrancelhas]",
    rating: 5,
  },
  {
    name: "[Nome da Cliente 2]",
    role: "[Profissão/Cidade]",
    content: "[Depoimento sobre os resultados alcançados após estudar o ebook]",
    rating: 5,
  },
  {
    name: "[Nome da Cliente 3]",
    role: "[Profissão/Cidade]",
    content: "[Depoimento sobre a qualidade do conteúdo e suporte da Vera]",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute top-20 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            O que dizem as <span className="text-gradient-gold">alunas</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-gold/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
