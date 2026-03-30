import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Imersão Criativa",
    description: "Mergulhamos no seu negócio para entender a alma da marca e mapear o comportamento do seu público-alvo.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Engenharia de Conversão",
    description: "Cada pixel, cada interação e cada linha de código é projetada para maximizar resultados mensuráveis.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Escala Exponencial",
    description: "Lançamos, iteramos e otimizamos continuamente — seu site evolui junto com o seu crescimento.",
  },
];

const MethodologySection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6 tracking-wide">
            Metodologia
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="text-gradient">Vibecoding</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-20">
            Onde criatividade e engenharia se encontram para criar experiências digitais que convertem.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <motion.div
                className="relative rounded-2xl glass p-8 h-full group cursor-default"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-foreground/[0.03]">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-sm transition-shadow duration-500">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
