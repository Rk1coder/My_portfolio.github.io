import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[30rem] h-[20rem] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[25rem] h-[15rem] bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
            <div className="mt-8 flex justify-center space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/rabiakiratlieng" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}