import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { src: portfolio1, title: "E-Commerce Premium", category: "Loja Virtual" },
  { src: portfolio2, title: "SaaS Dashboard", category: "Plataforma" },
  { src: portfolio3, title: "Fintech App", category: "Landing Page" },
  { src: portfolio4, title: "Real Estate Luxury", category: "Imobiliária" },
];

const doubled = [...projects, ...projects];

const PortfolioSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6 tracking-wide">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Projetos que <span className="text-gradient">impressionam.</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 marquee">
          {doubled.map((project, i) => (
            <TiltCard
              key={i}
              className="flex-shrink-0 w-[320px] md:w-[400px]"
            >
              <div className="rounded-2xl glass overflow-hidden group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
