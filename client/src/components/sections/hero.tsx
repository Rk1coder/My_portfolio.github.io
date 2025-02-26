import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Rabia Kiratli
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer & Web Developer
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
