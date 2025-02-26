import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground">
                I am a passionate Software Engineer with experience in web development
                and a strong foundation in modern technologies. I enjoy creating
                elegant solutions to complex problems.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Frontend</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Backend</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
