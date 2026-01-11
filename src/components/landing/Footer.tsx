const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Vera Dias. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
