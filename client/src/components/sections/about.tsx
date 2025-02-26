import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Material UI", "Redux"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Agile/Scrum"]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={itemVariants} className="mb-8 md:mb-0">
              <img 
                src="/attached_assets/WhatsApp Görsel 2024-09-20 saat 11.35.23_6a0fc72f.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="p-8 backdrop-blur-sm bg-card/80">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Background</h3>
                <div className="space-y-4">
                  <p className="text-lg text-foreground/80">
                    I am a passionate Full Stack Developer with expertise in modern web technologies.
                    With a strong foundation in both frontend and backend development, I specialize in
                    creating scalable and user-friendly applications.
                  </p>
                  <p className="text-lg text-foreground/80">
                    My experience includes working with React, Node.js, and various cloud technologies,
                    always striving to deliver high-quality solutions that meet business needs.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category} className="p-8 backdrop-blur-sm bg-card/80">
                  <h3 className="text-2xl font-semibold mb-6 text-primary capitalize">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-3"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-foreground/80">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}