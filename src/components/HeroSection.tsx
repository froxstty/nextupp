import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5512997105804?text=Olá! Gostaria de solicitar uma consultoria.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8 tracking-wide">
            🚀 Vibecoding Agency
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Não vendemos sites.
          <br />
          <span className="text-gradient">Construímos Máquinas</span>
          <br />
          de Conversão.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          A NextUp utiliza Vibecoding para fundir design de elite com engenharia de alta performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="h-14 px-8 rounded-xl text-base gap-3 animate-pulse_glow">
                <MessageSquare className="w-5 h-5" />
                Solicitar Consultoria via WhatsApp
              </Button>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Floating mockup */}
        <motion.div
          className="mt-16 md:mt-20 relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-75" />
          <motion.img
            src={heroMockup}
            alt="NextUp - Máquina de Conversão"
            width={800}
            height={614}
            className="relative mx-auto max-w-full drop-shadow-2xl"
            animate={{
              y: [0, -15, 0],
              rotateY: [-3, 3, -3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ perspective: 1000 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
