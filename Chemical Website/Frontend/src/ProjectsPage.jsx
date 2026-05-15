// ProjectsPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Globe, 
  X,
  Code,
  Server,
  Database,
  Cloud,
  Smartphone,
  ShoppingBag,
  Brain,
  MessageSquare,
  ServerCog,
  Users,
  BarChart,
  Shield,
  Zap,
  Layers,
  Cpu,
  GitBranch,
  Package
} from 'lucide-react';

const ProjectsPage = ({ projects, onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </motion.button>
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              All Projects
            </h1>
            
            <div className="w-10" /> {/* Spacer for alignment */}
          </div>
        </div>
      </motion.div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Live' 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{project.year}</span>
                      <span className="text-blue-400 text-sm font-medium">View Details →</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 rounded-xl ${
                    selectedProject.category === 'Cloud Computing' ? 'bg-blue-500/20' :
                    selectedProject.category === 'E-commerce' ? 'bg-purple-500/20' :
                    selectedProject.category === 'AI/ML' ? 'bg-yellow-500/20' :
                    selectedProject.category === 'Finance' ? 'bg-cyan-500/20' :
                    'bg-cyan-500/20'
                  }`}>
                    <selectedProject.icon className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                        {selectedProject.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full ${
                        selectedProject.status === 'Live' 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {selectedProject.status}
                      </span>
                      <span className="text-gray-400">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                  <p className="text-gray-300">{selectedProject.details.overview}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.details.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.details.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Solutions</h3>
                    <p className="text-gray-300">{selectedProject.details.solution}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Globe className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-full font-semibold hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;