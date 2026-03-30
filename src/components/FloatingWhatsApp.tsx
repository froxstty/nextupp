import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = "https://wa.me/5512997105804?text=Olá! Vim pelo site da NextUp.";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%)/0.3] hover:scale-110 transition-transform duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6 text-primary-foreground" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
