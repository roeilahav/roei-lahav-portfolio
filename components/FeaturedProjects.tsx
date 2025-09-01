import { Github, ExternalLink, Shield, BarChart3, Code2, Building2, Star, Zap } from 'lucide-react'

interface Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: Array<{
    text: string;
    icon: React.ComponentType<any>;
  }>;
  type: string;
  gradient: string;
  status: 'completed' | 'in-development';
  priority: 'high' | 'medium';
}

const FeaturedProjects = () => {
  const projects: Project[] = [
    {
      title: 'Hamatz',
      subtitle: 'Secure Real-Time Collaboration Platform',
      description: 'Military-grade slide collaboration system with real-time synchronization, role-based access control, and comprehensive version management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      highlights: [
        { text: 'Real-time sync', icon: Zap },
        { text: 'Military security', icon: Shield },
        { text: 'Version control', icon: Code2 }
      ],
      type: 'Defense System',
      gradient: 'from-blue-600 via-blue-700 to-purple-800',
      status: 'completed',
      priority: 'high'
    },
    {
      title: 'Madadim',
      subtitle: 'Intelligence Dashboard Platform',
      description: 'High-performance data processing system with interactive visualizations for critical operational decision-making in defense environments.',
      techStack: ['React', 'TypeScript', 'MUI', 'Charts.js', 'MongoDB'],
      highlights: [
        { text: 'High-volume processing', icon: BarChart3 },
        { text: 'Interactive charts', icon: Star },
        { text: 'Operational insights', icon: Shield }
      ],
      type: 'Intelligence Platform',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      status: 'completed',
      priority: 'high'
    },
    {
      title: 'Gusta Restaurant',
      subtitle: 'Modern Restaurant Management System',
      description: 'Full-stack restaurant management platform with real-time ordering, inventory tracking, and customer management features.',
      techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      highlights: [
        { text: 'Real-time orders', icon: Code2 },
        { text: 'Inventory tracking', icon: Star },
        { text: 'Customer management', icon: Zap }
      ],
      type: 'Web Application',
      gradient: 'from-purple-600 via-violet-600 to-pink-700',
      status: 'completed',
      priority: 'medium'
    },
    {
      title: 'TaskFlow Pro',
      subtitle: 'Project Management Platform',
      description: 'Modern task management system with real-time collaboration, analytics dashboard, and team productivity insights.',
      techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      highlights: [
        { text: 'Team collaboration', icon: Building2 },
        { text: 'Analytics dashboard', icon: Star },
        { text: 'Real-time updates', icon: Zap }
      ],
      type: 'Productivity Tool',
      gradient: 'from-orange-600 via-red-600 to-rose-700',
      status: 'completed',
      priority: 'medium'
    }
  ]

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto px-3 relative z-10">
        {/* Refined Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-2">
            <Star className="w-2 h-2 text-blue-400" />
            <span className="text-xs font-medium text-gray-300">Featured Work</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-xs">
            Mission-critical defense applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {projects.map((project, index) => {
            const isHighPriority = project.priority === 'high';
            const isCompleted = project.status === 'completed';
            
            return (
              <article 
                key={index}
                className={`group relative bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-white/40 hover:shadow-lg hover:shadow-blue-500/10 ${
                  isHighPriority ? 'ring-1 ring-blue-400/30 shadow-md shadow-blue-500/10' : ''
                }`}
              >

                {/* Status Badge */}
                <div className="absolute top-2 right-2 z-20">
                  <div className={`px-1.5 py-0.5 backdrop-blur-lg text-xs font-bold rounded-md border shadow-sm transition-all duration-300 group-hover:scale-105 ${
                    isCompleted 
                      ? 'bg-green-500/20 text-green-300 border-green-500/30 shadow-green-500/20' 
                      : 'bg-blue-500/20 text-blue-300 border-blue-500/30 shadow-blue-500/20'
                  }`}>
                    {isCompleted ? '● LIVE' : '● DEV'}
                  </div>
                </div>

                {/* Project Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-3 relative overflow-hidden group-hover:shadow-lg transition-all duration-500`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-black/40 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30 shadow-lg group-hover:bg-black/50 transition-all duration-300">
                        {project.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-black text-white mb-1 group-hover:scale-[1.02] transition-transform duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/95 font-semibold leading-relaxed text-xs">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/15 rounded-full blur-xl group-hover:scale-125 group-hover:bg-white/20 transition-all duration-700"></div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white/15 rounded-full blur-lg group-hover:scale-125 group-hover:bg-white/20 transition-all duration-700 delay-150"></div>
                  <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Project Preview */}
                <div className="h-24 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  {project.title === 'Gusta Restaurant' ? (
                    <div className="relative h-full">
                      <img 
                        src="/gusta.png" 
                        alt="Gusta Restaurant Application"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ) : project.title === 'TaskFlow Pro' ? (
                    <div className="relative h-full">
                      <img 
                        src="/eliimate.jpg" 
                        alt="TaskFlow Pro Application"
                        className="w-full h-full object-cover object-bottom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ) : project.title === 'Hamatz' ? (
                    <div className="relative h-full">
                      <img 
                        src="/confidential.jpg" 
                        alt="Hamatz Secure Collaboration Platform"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ) : project.title === 'Madadim' ? (
                    <div className="relative h-full">
                      <img 
                        src="/confidential.jpg" 
                        alt="Hamatz Secure Collaboration Platform"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-teal-600/20 to-cyan-700/30"></div>
                      <div className="absolute inset-0 opacity-20">
                        <div className="flex items-center justify-center h-full">
                          <div className="grid grid-cols-6 gap-0.5">
                            {Array.from({length: 18}).map((_, i) => (
                              <div key={i} className="w-0.5 bg-emerald-400 rounded-full animate-pulse" style={{
                                height: `${Math.random() * 16 + 6}px`,
                                animationDelay: `${i * 0.1}s`
                              }}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-cyan-700 rounded-lg flex items-center justify-center mx-auto mb-1 shadow-lg border border-emerald-400/30">
                            <BarChart3 className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-xs font-bold text-white">Intelligence Dashboard</p>
                          <p className="text-xs text-emerald-200 opacity-80">Analytics • Visualization • Insights</p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-3 space-y-3">
                  <p className="text-gray-300 leading-relaxed text-xs font-medium">
                    {project.description}
                  </p>

                  {/* Enhanced Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                    {project.highlights.map((highlight, idx) => {
                      const Icon = highlight.icon;
                      return (
                        <div 
                          key={idx} 
                          className="group/highlight bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-lg p-2 border border-white/30 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                        >
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center group-hover/highlight:scale-110 transition-transform duration-300">
                              <Icon className="w-2 h-2 text-white" />
                            </div>
                            <p className="text-white text-xs font-bold">{highlight.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div className="space-y-1.5">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide flex items-center gap-1">
                      <Code2 className="w-2 h-2 text-blue-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md text-white text-xs font-bold rounded-md border border-white/40 hover:border-white/60 hover:scale-105 hover:shadow-md transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Project Actions */}
                  <div className="flex gap-2 pt-2">
                    <button className="group/btn flex-1 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md hover:from-white/25 hover:to-white/15 text-white font-bold py-2 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 hover:shadow-lg">
                      <Github size={12} className="inline mr-1 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="text-xs">View Code</span>
                    </button>
                    <button className={`group/btn flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-blue-500/20 text-white font-bold py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-white/20`}>
                      <ExternalLink size={12} className="inline mr-1 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="text-xs">Live Demo</span>
                    </button>
                  </div>
                </div>

              </article>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-500/20">
            <ExternalLink size={12} />
            <span className="text-sm">View All Projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects