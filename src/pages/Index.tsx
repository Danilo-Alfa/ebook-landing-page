import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ContentSection from "@/components/landing/ContentSection";
import AuthorSection from "@/components/landing/AuthorSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ContentSection />
      <AuthorSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
