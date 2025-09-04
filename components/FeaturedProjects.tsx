import { Github, ExternalLink, Shield, BarChart3, Code2, Building2, Star, Zap, Brain, Users } from 'lucide-react'

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
        { text: 'WebSocket real-time sync', icon: Zap },
        { text: 'End-to-end encryption', icon: Shield },
        { text: 'Git-like version control', icon: Code2 }
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
        { text: 'MongoDB aggregation pipeline', icon: BarChart3 },
        { text: 'Charts.js interactive visuals', icon: Star },
        { text: 'Role-based data access', icon: Shield }
      ],
      type: 'Intelligence Platform',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      status: 'completed',
      priority: 'high'
    },
    {
      title: 'Gusta Pizza',
      subtitle: 'Modern Restaurant Management System',
      description: 'Full-stack restaurant management platform with real-time ordering, inventory tracking, and customer management features.',
      techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      highlights: [
        { text: 'Socket.io order updates', icon: Code2 },
        { text: 'Automated stock tracking', icon: Star },
        { text: 'Customer analytics dashboard', icon: Users }
      ],
      type: 'Web Application',
      gradient: 'from-purple-600 via-violet-600 to-pink-700',
      status: 'completed',
      priority: 'medium'
    },
    {
      title: 'Elli-Mate',
      subtitle: 'AI-Powered Companion Chatbot for Elderly',
      description: 'Intelligent chatbot designed to provide companionship and support for elderly users when they need assistance or conversation, powered by AI technology.',
      techStack: ['Java', 'Android Studio', 'GEMINI API', 'Firebase'],
      highlights: [
        { text: 'GEMINI API integration', icon: Brain },
        { text: 'Large text & voice UI', icon: Users },
        { text: 'Firebase emergency alerts', icon: Shield }
      ],
      type: 'Mobile App',
      gradient: 'from-orange-600 via-red-600 to-rose-700',
      status: 'completed',
      priority: 'medium'
    }
  ]

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Enhanced Purple-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-violet-950"></div>
      
      {/* Purple-themed floating elements */}
      <div className="absolute top-8 left-4 w-20 h-20 bg-purple-500/10 rounded-xl blur-xl animate-pulse"></div>
      <div className="absolute top-16 right-8 w-16 h-16 bg-violet-500/12 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-12 left-1/4 w-24 h-24 bg-indigo-500/8 rounded-2xl blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-8 right-1/3 w-18 h-18 bg-purple-400/10 rounded-xl blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      {/* Enhanced purple gradient orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/12 to-indigo-500/12 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/8 to-violet-500/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '1s'}}></div>

      <div className="max-w-5xl mx-auto px-3 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full mb-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-200 tracking-wide">Featured Work</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent mb-6 leading-tight">
            Featured Projects
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Mission-critical applications built with cutting-edge technologies for defense and commercial sectors
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isHighPriority = project.priority === 'high';
            const isCompleted = project.status === 'completed';
            
            return (
              <article 
                key={index}
                className={`group relative bg-gradient-to-br from-white/10 via-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/20 transform-gpu animate-fade-in-up h-[600px] flex flex-col ${
                  isHighPriority ? 'ring-1 ring-purple-400/30 shadow-md shadow-purple-500/20' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >

                {/* Professional Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 backdrop-blur-xl text-xs font-bold rounded-full border-2 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                    isCompleted 
                      ? 'bg-green-500/20 text-green-200 border-green-400/40 shadow-green-500/30' 
                      : 'bg-blue-500/20 text-blue-200 border-blue-400/40 shadow-blue-500/30'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        isCompleted ? 'bg-green-400' : 'bg-blue-400'
                      }`}></div>
                      {isCompleted ? 'LIVE' : 'DEV'}
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-4 relative overflow-hidden group-hover:shadow-xl transition-all duration-500`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700"></div>
                  
                  {/* Premium floating elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-125 group-hover:bg-white/15 transition-all duration-1000"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-125 group-hover:bg-white/15 transition-all duration-1000 delay-300"></div>
                    <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-700"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-black/30 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20 shadow-xl group-hover:bg-black/40 group-hover:scale-105 transition-all duration-300">
                        {project.type}
                      </span>
                      {isHighPriority && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full border border-yellow-400/30">
                          <Star size={10} className="text-yellow-300 fill-current" />
                          <span className="text-yellow-200 text-xs font-medium">Featured</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:scale-[1.01] transition-transform duration-300 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 font-medium leading-relaxed text-xs">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Compact Project Preview */}
                <div className="h-32 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  {project.title === 'Gusta Pizza' ? (
                    <div className="relative h-full">
                      <img 
                        src="/gusta.png" 
                        alt="Gusta Pizza Application"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ) : project.title === 'Elli-Mate' ? (
                    <div className="relative h-full">
                      <img 
                        src="/eliimate.jpg" 
                        alt="Elli-Mate Application"
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
                        alt="Madadim Intelligence Dashboard Platform"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Compact Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-gray-200 leading-relaxed text-xs font-medium mb-3">
                    {project.description}
                  </p>

                  {/* Compact Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1 mb-2">
                      <Zap className="w-3 h-3 text-purple-400" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                          <div 
                            key={idx} 
                            className="group/highlight bg-gradient-to-r from-white/8 to-white/5 backdrop-blur-md rounded-md px-2 py-1 border border-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105"
                          >
                            <div className="flex items-center gap-1.5">
                              <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-sm flex items-center justify-center group-hover/highlight:scale-110 transition-all duration-300">
                                <Icon className="w-1.5 h-1.5 text-white" />
                              </div>
                              <p className="text-white text-xs font-medium">{highlight.text}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Compact Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1 mb-2">
                      <Code2 className="w-3 h-3 text-blue-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl text-white text-xs font-semibold rounded-lg border border-white/30 hover:border-white/50 hover:scale-105 hover:shadow-md hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer to push buttons to bottom */}
                  <div className="flex-1"></div>
                  
                  {/* Compact Project Actions */}
                  <div className="flex gap-3 pt-3">
                    <button className="group/btn flex-1 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl hover:from-white/25 hover:to-white/20 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 hover:shadow-md">
                      <div className="flex items-center justify-center gap-1.5">
                        <Github size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="text-xs">View Code</span>
                      </div>
                    </button>
                    <button className={`group/btn flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-md hover:shadow-purple-500/30 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40`}>
                      <div className="flex items-center justify-center gap-1.5">
                        <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="text-xs">Live Demo</span>
                      </div>
                    </button>
                  </div>
                </div>

              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects