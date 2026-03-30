import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight">
          Next<span className="text-gradient">Up</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#metodologia" className="hover:text-foreground transition-colors">Metodologia</a>
          <a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors font-medium"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
