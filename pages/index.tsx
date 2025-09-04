import { useState, useEffect } from 'react'
import { ArrowRight, Code, Shield, Terminal, Eye, Mail, Github, Linkedin, Users, Star } from 'lucide-react'
import AboutMe from '../components/AboutMe'
import TechnicalArsenal from '../components/TechnicalArsenal'
import FeaturedProjects from '../components/FeaturedProjects'
import LetsWorkTogether from '../components/LetsWorkTogether'

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Track mouse for parallax effects
  useEffect(() => {
    if (!isClient) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isClient])

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home', icon: <Terminal size={16} /> },
    { id: 'about', label: 'About', icon: <Users size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Star size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
  ]


  // Smooth scroll with offset for fixed header
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }


  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollY = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-violet-950 relative overflow-hidden">
      {/* Enhanced purple background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-12 animate-pulse delay-3000"></div>
      </div>

      {/* Compact Side Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform-gpu ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500 scale-105 shadow-md shadow-purple-500/30' 
                      : 'text-white/60 hover:text-white hover:bg-white/20 hover:scale-105'
                  }`}
                  title={item.label}
                >
                  <div className={`transition-all duration-300 ${
                    activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {item.icon}
                  </div>
                </button>
                
                {/* Compact tooltip */}
                <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-gray-900/90 backdrop-blur-lg text-white px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap border border-white/10 shadow-lg">
                    {item.label}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-3 border-transparent border-r-gray-900/90"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform-gpu ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500 scale-110 shadow-lg shadow-purple-500/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  <div className={`transition-all duration-300 ${
                    activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {item.icon}
                  </div>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 rounded-2xl bg-white/10 animate-pulse"></div>
                  )}
                </button>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                )}

                {/* Mobile tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-gray-900/90 backdrop-blur-lg text-white px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap border border-white/10 shadow-xl">
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 rounded-b-3xl"
              style={{
                width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Enhanced Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Premium Status Badge */}
              <div className="group animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 rounded-full text-white shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
                  <div className="relative mr-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-semibold tracking-wide">Available for New Projects</span>
                  <Shield size={16} className="ml-2 text-green-300 group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              {/* Enhanced Main Title */}
              <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative">
                  <h1 className="text-4xl lg:text-7xl font-black leading-none tracking-tighter">
                    <span className="block text-white hover:scale-105 transition-transform duration-500 cursor-default">
                      ROEI
                    </span>
                    <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-700 cursor-default">
                      LAHAV
                    </span>
                  </h1>
                  {/* Subtle decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-float"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Enhanced Role Card */}
                <div className="relative group">
                  <div className="bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                          <Terminal size={24} className="text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                          <Star size={8} className="text-white" fill="currentColor" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">
                          Full-Stack Software Engineer
                        </h2>
                        <p className="text-purple-200 font-medium">
                          Backend Focus • Real-time Systems • Military-grade Security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transform-gpu"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <Eye size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-lg">View My Work</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="text-lg">Get In Touch</span>
                  </div>
                </button>
              </div>

              {/* Social Proof Indicators */}
              <div className="flex items-center space-x-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">1+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm font-medium">Military-grade Security</span>
                </div>
              </div>
            </div>

            {/* Enhanced Profile Section */}
            <div className="lg:col-span-5 flex justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="relative group">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-20 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 animate-spin-slow-reverse"></div>
                
                {/* Main image container */}
                <div className="relative z-10 p-2">
                  <div 
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-purple-500/30"
                    style={{
                      transform: isClient ? `perspective(1000px) rotateY(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.02}deg) rotateX(${-(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.02}deg)` : 'none'
                    }}
                  >
                    <img 
                      src="/roei.png"
                      alt="Roei Lahav - Full Stack Software Engineer"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-purple-900/20 transition-all duration-500"></div>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-lg group-hover:rotate-12 transition-all duration-300 animate-float">
                  <Code size={24} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-lg group-hover:-rotate-12 transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <Terminal size={16} className="text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Component */}
      <AboutMe />

      {/* Technical Arsenal Component */}
      <TechnicalArsenal />

      {/* Featured Projects Component */}
      <FeaturedProjects />

      {/* Let's Work Together Component */}
      <LetsWorkTogether />

      {/* Compact Footer */}
      <footer className="py-8 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold text-white">Roei Lahav</h3>
                <p className="text-gray-400 text-xs">Full-Stack Software Engineer</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/roeilahav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-300"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/roeilahav/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:roeilahaving@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/5 mt-4 pt-3 text-center">
              <p className="text-gray-500 text-xs font-medium">
                &copy; 2024 Roei Lahav • Built with Next.js & TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #2563eb);
        }

        @keyframes skillProgress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        /* Enhanced focus states */
        *:focus {
          outline: 2px solid rgba(168, 85, 247, 0.5);
          outline-offset: 2px;
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ModernPortfolio