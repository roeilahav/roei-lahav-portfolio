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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Side Navigation */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-blue-300 bg-white/30 scale-110' 
                    : 'text-white/60 hover:text-white hover:bg-white/20 hover:scale-105'
                }`}
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-blue-300 bg-white/20' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-5xl mx-auto px-3 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Hero Content - Bento Style */}
            <div className="lg:col-span-7 space-y-3">
              {/* Status Card - Glassmorphic */}
              <div className="inline-flex items-center px-2 py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white">
                <div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                <span className="text-xs font-medium tracking-wide">Available for hire</span>
                <Shield size={12} className="ml-1 text-blue-300" />
              </div>

              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-5xl font-black text-white leading-none tracking-tight">
                  ROEI
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    LAHAV
                  </span>
                </h1>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-3">
                  <h2 className="text-base lg:text-lg text-white font-light">
                    Full-Stack / Backend Software Engineer
                  </h2>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative z-10 flex items-center justify-center">
                    <Eye size={14} className="mr-1" />
                    <span className="text-sm">View Projects</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Profile Image - 3D Style */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div 
                  className="w-48 h-48 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105"
                  style={{
                    transform: isClient ? `perspective(1000px) rotateY(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.01}deg) rotateX(${-(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.01}deg)` : 'none'
                  }}
                >
                  <img 
                    src="/roei.png"
                    alt="Roei Lahav - Full Stack Software Engineer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/80 backdrop-blur-lg rounded-md flex items-center justify-center shadow-lg border border-white/20">
                  <Code size={16} className="text-white" />
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

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-white">Roei Lahav</h3>
                <p className="text-gray-300 text-sm">Full-Stack Software Engineer</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="https://github.com/roeilahav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-300"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/roeilahav/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:roeilahaving@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-6 pt-6 text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Roei Lahav. Built with Next.js, TailwindCSS & Modern Design Principles
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
      `}</style>
    </div>
  )
}

export default ModernPortfolio