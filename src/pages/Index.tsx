import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import MethodologySection from "@/components/MethodologySection";
import ConversionDataSection from "@/components/ConversionDataSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="metodologia">
        <ManifestoSection />
        <MethodologySection />
      </div>
      <div id="resultados">
        <ConversionDataSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-border/30 py-10 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NextUp. Todos os direitos reservados.
        </p>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
