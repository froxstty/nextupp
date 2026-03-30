import ScrollReveal from "@/components/ScrollReveal";
import genericSite from "@/assets/generic-site.jpg";
import nextupSite from "@/assets/nextup-site.jpg";
import { X, Sparkles } from "lucide-react";

const ManifestoSection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-center mb-6">
            O fim dos <span className="text-gradient">templates baratos.</span>
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-xl mx-auto mb-20">
            A diferença entre existir na internet e dominar o mercado digital.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Generic Site */}
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-2xl border border-border/30 bg-card/30 p-6 overflow-hidden group opacity-60 hover:opacity-80 transition-opacity duration-500">
              <div className="flex items-center gap-2 mb-4 text-destructive">
                <X className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Site Genérico</span>
              </div>
              <img
                src={genericSite}
                alt="Site genérico"
                loading="lazy"
                width={640}
                height={512}
                className="rounded-xl w-full object-cover grayscale"
              />
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>✗ Template pronto sem personalidade</li>
                <li>✗ Zero otimização para conversão</li>
                <li>✗ Design datado e esquecível</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* NextUp Site */}
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl border border-primary/30 bg-card/50 p-6 overflow-hidden group glow-sm">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Experiência NextUp</span>
              </div>
              <img
                src={nextupSite}
                alt="Experiência NextUp"
                loading="lazy"
                width={640}
                height={512}
                className="rounded-xl w-full object-cover"
              />
              <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                <li>✓ Design estratégico de alta conversão</li>
                <li>✓ Performance e SEO de elite</li>
                <li>✓ Micro-interações que encantam</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
