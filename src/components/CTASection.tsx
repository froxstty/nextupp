import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const CTASection = () => {
  const whatsappUrl = "https://wa.me/5512997105804?text=Olá! Gostaria de elevar minha presença digital.";

  return (
    <section className="relative py-32 px-4">
      <div className="absolute inset-0 bg-mesh" />
      <div className="relative max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="rounded-3xl glass-strong p-10 md:p-16 text-center glow-primary">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 tracking-wide">
              Premium Support
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Pronto para elevar o nível do seu{" "}
              <span className="text-gradient">jogo digital?</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
              Fale diretamente com nosso estrategista e receba um diagnóstico da sua presença digital atual.
            </p>

            <MagneticButton className="inline-block">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="h-14 px-8 rounded-xl text-base gap-3">
                  <MessageSquare className="w-5 h-5" />
                  Iniciar Conversa no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
