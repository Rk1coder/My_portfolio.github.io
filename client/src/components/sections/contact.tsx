import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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