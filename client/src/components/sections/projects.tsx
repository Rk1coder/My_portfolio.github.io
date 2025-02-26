import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/username/project1",
    liveUrl: "https://project1.demo.com"
  },
  {
    title: "Project 2",
    description: "A responsive web application with modern UI/UX",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/username/project2"
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
