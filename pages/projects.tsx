import { Project } from '@/types'
import Layout from '../components/Layout'
import { Github, ExternalLink, Calendar } from 'lucide-react'



const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with React, Node.js, and MongoDB',
    longDescription: 'A complete e-commerce solution featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Stripe API', 'JWT'],
    githubUrl: 'https://github.com/roei-lahav/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: '/images/ecommerce-project.jpg',
    featured: true,
    completedDate: 'January 2024'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Real-time collaborative task management application',
    longDescription: 'A productivity app that allows teams to collaborate in real-time, with features like drag-and-drop task management, real-time updates using WebSockets, and user roles.',
    techStack: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redux Toolkit', 'Material-UI'],
    githubUrl: 'https://github.com/roei-lahav/task-management',
    demoUrl: 'https://task-manager-demo.vercel.app',
    imageUrl: '/images/task-management.jpg',
    featured: true,
    completedDate: 'November 2023'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts',
    longDescription: 'A responsive weather application that provides detailed weather information, 7-day forecasts, weather maps, and location-based services.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'OpenWeather API', 'Vercel'],
    githubUrl: 'https://github.com/roei-lahav/weather-dashboard',
    demoUrl: 'https://weather-dashboard-roei.vercel.app',
    imageUrl: '/images/weather-dashboard.jpg',
    featured: false,
    completedDate: 'September 2023'
  },
  {
    id: '4',
    title: 'Personal Blog Platform',
    description: 'Modern blog platform with CMS capabilities',
    longDescription: 'A full-featured blogging platform with markdown support, syntax highlighting for code blocks, comment system, and SEO optimization.',
    techStack: ['Next.js', 'Sanity CMS', 'TypeScript', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/roei-lahav/blog-platform',
    demoUrl: 'https://roei-blog.vercel.app',
    imageUrl: '/images/blog-platform.jpg',
    featured: false,
    completedDate: 'August 2023'
  }
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
      {/* Project Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-gray-500 text-sm">Project Screenshot</div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
          Featured
        </span>
      )}

      {/* Project Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.longDescription}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Date */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar size={16} className="mr-2" />
        {project.completedDate}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
        )}
        
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

const Projects = () => {
  const featuredProjects = projectsData.filter(project => project.featured)
  const otherProjects = projectsData.filter(project => !project.featured)

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a learning journey 
              and demonstrates different aspects of full-stack development.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Other Projects */}
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Projects