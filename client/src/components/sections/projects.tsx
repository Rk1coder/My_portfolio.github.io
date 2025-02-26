import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management and payment integration",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com/rabiakiratli/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.rabiakiratli.dev"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team features",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/rabiakiratli/task-manager",
    liveUrl: "https://tasks.rabiakiratli.dev"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization",
    technologies: ["React", "D3.js", "Node.js", "GraphQL"],
    githubUrl: "https://github.com/rabiakiratli/social-dashboard"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={cardVariants}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}