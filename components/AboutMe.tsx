import { Brain, Award, Shield, GraduationCap, Code, Users, Zap, MapPin } from 'lucide-react'

const AboutMe = () => {
  const achievements = [
    {
      icon: Code,
      title: "Scalable Backend Systems",
      description: "Built scalable and secure backend systems with the MERN stack for mission-critical military applications under heavy load",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Real-time Dashboards",
      description: "Developed real-time dashboards with React, TypeScript, and MUI to support operational decision-making",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Led implementation of military-grade authentication, encryption, and role-based access control across classified networks",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "CI/CD Pipeline Management",
      description: "Managed CI/CD pipelines with Azure DevOps to enable zero-downtime deployments and high system reliability",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="about" className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-3 relative">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
            <Brain size={12} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium">About Me</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Building Secure, Scalable Solutions
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Full-Stack Software Engineer with a backend focus and hands-on experience building secure, real-time systems for the Israeli Defense Forces. Skilled in scalable backend development with Node.js, Express, and MongoDB, and in creating responsive interfaces with React.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          {/* Professional Summary */}
          <div className="lg:col-span-8 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <Brain size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Professional Journey</h3>
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-gray-400" />
                  <span className="text-gray-400 text-xs">Omer, Israel 2024-2025</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-300">
              <p className="text-xs leading-relaxed">
                During my time as a <span className="text-white font-semibold">Full-Stack Software Engineer at NGsoft</span>, 
                I specialized in architecting secure, real-time systems for the Israeli Defense Forces. I delivered 
                mission-critical applications using Node.js and MongoDB.
              </p>
              
              <p className="text-xs leading-relaxed">
                My passion lies in building <span className="text-blue-300 font-semibold">scalable backend systems</span> that can handle 
                high-traffic loads while maintaining security standards.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-3 border border-white/10">
                <h4 className="text-white font-semibold mb-2 text-xs">Core Expertise</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <div className="text-blue-300 text-xs">• MERN Stack Development</div>
                    <div className="text-purple-300 text-xs">• Real-time System Architecture</div>
                    <div className="text-green-300 text-xs">• Database Optimization</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-cyan-300 text-xs">• Military-grade Security</div>
                    <div className="text-pink-300 text-xs">• CI/CD Pipeline Management</div>
                    <div className="text-orange-300 text-xs">• Performance Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Metrics */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-green-600/10 backdrop-blur-xl border border-green-500/20 rounded-xl p-3 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Award size={16} className="text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Professional Experience</h3>
              <p className="text-xl font-black text-green-300 mb-0.5">1+</p>
              <p className="text-gray-300 text-xs">Years in Production</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-600/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-3 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                <GraduationCap size={16} className="text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Education</h3>
              <p className="text-purple-300 font-semibold mb-0.5 text-xs">BSc Computer Science</p>
              <p className="text-gray-400 text-xs mb-1">Sapir Academic College (2020-2023)</p>
              <p className="text-pink-300 font-semibold mb-0.5 text-xs">Advanced Training</p>
              <p className="text-gray-400 text-xs">Google Reichman Tech School (2024)</p>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Key Achievements</h3>
            <p className="text-gray-400 text-xs">Delivering impact through innovative solutions and technical excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${achievement.gradient} rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={14} className="text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{achievement.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-xs">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe