import authorPhoto from "@/assets/author-photo.jpg";

const AuthorSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-whatsapp/30 to-transparent" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp/30 to-gold/30 rounded-full blur-2xl" />
              <img
                src={authorPhoto}
                alt="Vera Dias"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-gold/30"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-gold-dark text-accent-foreground px-6 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap">
                +4 anos de experiência
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Sobre a Autora
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Conheça a <span className="text-gradient-gold">Vera Dias</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                [Texto sobre a trajetória da Vera Dias, como ela começou na área de 
                design de sobrancelhas e sua experiência profissional]
              </p>
              <p>
                [Suas conquistas, número de alunas formadas, depoimentos de clientes 
                e por que ela decidiu criar este ebook]
              </p>
              <p>
                [Sua missão de ajudar outras mulheres a alcançarem independência 
                financeira através do design de sobrancelhas]
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://instagram.com/Vdhair_ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-whatsapp hover:text-whatsapp-dark transition-colors"
              >
                @Vdhair_ofc
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
