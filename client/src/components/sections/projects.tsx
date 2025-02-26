import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/images/ecommerce.jpg",
    description: "A full-stack e-commerce platform with real-time inventory management and payment integration",
    details: "Built with a microservices architecture, this platform handles thousands of transactions daily. Features include real-time inventory tracking, automated order processing, and integrated payment gateway with Stripe.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com/rabiakiratli/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.rabiakiratli.dev"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team features",
    details: "Developed a real-time task management system that enables team collaboration with features like live updates, task assignment, and progress tracking. Implements WebSocket for instant notifications.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/rabiakiratli/task-manager",
    liveUrl: "https://tasks.rabiakiratli.dev"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization",
    details: "Created an intuitive dashboard that aggregates social media metrics across multiple platforms. Features interactive charts and customizable reporting tools using D3.js.",
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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
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