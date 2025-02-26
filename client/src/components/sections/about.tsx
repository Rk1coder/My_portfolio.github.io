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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground">
                  I am a passionate Full Stack Developer with expertise in modern web technologies.
                  With a strong foundation in both frontend and backend development, I specialize in
                  creating scalable and user-friendly applications. My experience includes working
                  with React, Node.js, and various cloud technologies.
                </p>
                <p className="text-muted-foreground mt-4">
                  I am dedicated to writing clean, maintainable code and always eager to learn new
                  technologies to solve complex problems effectively.
                </p>
              </Card>
            </motion.div>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="relative"
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {items.map((skill) => (
                        <motion.div
                          key={skill}
                          className="flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}