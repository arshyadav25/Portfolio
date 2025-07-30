import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Dynamic E-Commerce Platform',
      description: 'A fully functional e-commerce platform built with Angular and Node.js, along with popular UI clone projects.',
      longDescription: 'This is a complete full-stack e-commerce application developed using Angular for frontend and Node.js with Express and MongoDB for backend. It includes features like user authentication, product management, shopping cart, payment gateway integration (Stripe), and an admin dashboard. Alongside this, I’ve also built dynamic, responsive UI clones of platforms like Instagram, YouTube, Netflix, and Disney+ to sharpen my frontend skills and recreate real-world UIs using Angular and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg',
      technologies: ['Angular', 'HTML|CSS', 'SCSS', 'REST API', 'Stripe', 'Tailwind CSS', 'Bootstrap',],
      githubUrl: '#',
      liveUrl: 'https://internship-journey.vercel.app/routing',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Hire EQ – Team Task Management App',
      description: 'A modern task management platform with real-time collaboration and productivity tools.',
      longDescription: 'Hire EQ is a dynamic, responsive task management web app built with Angular and TypeScript. It enables teams to manage projects efficiently with features like real-time updates (via Firebase), task assignment, deadline tracking, status filters, and team messaging. The clean UI is built using Material-UI, ensuring a professional and user-friendly experience. Ideal for remote teams to stay organized and productive.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      technologies: ['Angular', 'TypeScript', 'Material-UI', 'Responsive Design', 'HTML|CSS', 'SCSS', 'REST API', 'Stripe', 'Tailwind CSS', 'Bootstrap'],
      githubUrl: '#',
      liveUrl: 'https://hire-eq.vercel.app/login',
      category: 'Frontend'
    },

    {
      id: 3,
      title: 'Restaurant Dashboard',
      description: 'Real-time restaurant management dashboard',
      longDescription: 'An intuitive restaurant dashboard providing real-time analytics, order management, and customer insights. Features location-based service tracking and customizable widgets.',
      image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['Angular', 'Chart.js', 'Restaurant API', 'CSS3', 'HTML|CSS', 'SCSS', 'REST API', 'Stripe', 'Tailwind CSS', 'Bootstrap'],
      githubUrl: '#',
      liveUrl: 'https://restaurant-ui-sooty.vercel.app/main',
      category: 'Frontend'
    },
    // {
    //   id: 4,
    //   title: 'Blog CMS',
    //   description: 'Content management system for bloggers',
    //   longDescription: 'A powerful content management system designed for bloggers and content creators. Features rich text editing, media management, SEO optimization, and analytics integration.',
    //   image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg',
    //   technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   category: 'Full Stack'
    // },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with animations',
      longDescription: 'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode, contact forms, and optimized performance for all devices.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      githubUrl: '#',
      liveUrl: 'https://portfolio-delta-eosin-93.vercel.app/',
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Instagram Clone',
      description: 'Social media management and analytics dashboard',
      longDescription: 'A feature-rich Instagram-inspired social media management tool. Includes analytics, post scheduling, engagement tracking, multi-platform integration, and Stripe-based payment features. Designed for social media managers and digital marketing teams.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg',
      technologies: ['Angular', 'HTML', 'CSS', 'SCSS', 'REST API', 'Stripe', 'Tailwind CSS', 'Bootstrap'],
      githubUrl: '#',
      liveUrl: 'https://internship-journey.vercel.app/instagram',
      category: 'Frontend'
    }

  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs flex items-center">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-900 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a
                  href={selectedProject.githubUrl}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;