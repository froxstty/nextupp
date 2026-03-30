import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 340, suffix: "%", label: "Aumento médio em conversões" },
  { icon: Users, value: 50, suffix: "+", label: "Projetos entregues" },
  { icon: Zap, value: 2.1, suffix: "s", label: "Tempo médio de carregamento" },
];

const AnimatedBar = ({ percentage, delay }: { percentage: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: 0 }}
        animate={inView ? { width: `${percentage}%` } : {}}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-gradient">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">0</span>
      )}
    </span>
  );
};

const ConversionDataSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-4">
            Design que <span className="text-gradient">paga o próprio investimento.</span>
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-xl mx-auto mb-20">
            Resultados reais que transformam presença digital em receita.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl glass p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-3">{stat.label}</p>
                <div className="mt-6">
                  <AnimatedBar percentage={70 + i * 10} delay={i * 0.2} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionDataSection;
