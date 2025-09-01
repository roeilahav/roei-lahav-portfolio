import { Code, Database, Server, Globe, CheckCircle, Zap, Brain, Coffee, Cloud, Cpu, Terminal, Star, Award, TrendingUp, Shield, Layers, Palette, Smartphone } from 'lucide-react'

const TechnicalArsenal = () => {
  const skillCategories = {
    'Frontend & UI': {
      icon: <Palette className="w-3 h-3" />,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React', level: 95, icon: <Globe className="w-2 h-2" />, color: 'from-blue-400 to-cyan-400' },
        { name: 'JavaScript', level: 95, icon: <Zap className="w-2 h-2" />, color: 'from-yellow-400 to-orange-400' },
        { name: 'TypeScript', level: 90, icon: <Code className="w-2 h-2" />, color: 'from-blue-500 to-indigo-500' },
        { name: 'Material UI', level: 85, icon: <Palette className="w-2 h-2" />, color: 'from-blue-600 to-indigo-600' },
        { name: 'TailwindCSS', level: 90, icon: <Palette className="w-2 h-2" />, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    'Backend & Server': {
      icon: <Server className="w-3 h-3" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 95, icon: <Server className="w-2 h-2" />, color: 'from-green-400 to-emerald-400' },
        { name: 'Express.js', level: 90, icon: <Layers className="w-2 h-2" />, color: 'from-gray-500 to-slate-500' },
        { name: 'Java', level: 85, icon: <Code className="w-2 h-2" />, color: 'from-red-500 to-orange-500' },
        { name: 'Python', level: 80, icon: <Code className="w-2 h-2" />, color: 'from-blue-500 to-green-500' },
        { name: 'C#/C++', level: 75, icon: <Terminal className="w-2 h-2" />, color: 'from-purple-500 to-blue-500' }
      ]
    },
    'Database & Storage': {
      icon: <Database className="w-3 h-3" />,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 90, icon: <Database className="w-2 h-2" />, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 85, icon: <Database className="w-2 h-2" />, color: 'from-blue-600 to-blue-700' },
        { name: 'Redis', level: 80, icon: <Cpu className="w-2 h-2" />, color: 'from-red-400 to-red-500' }
      ]
    },
    'DevOps & Tools': {
      icon: <Cloud className="w-3 h-3" />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Docker', level: 80, icon: <Terminal className="w-2 h-2" />, color: 'from-blue-500 to-blue-600' },
        { name: 'Azure DevOps', level: 85, icon: <Cloud className="w-2 h-2" />, color: 'from-blue-500 to-purple-500' },
        { name: 'Git', level: 95, icon: <Code className="w-2 h-2" />, color: 'from-orange-500 to-red-500' },
        { name: 'Postman', level: 85, icon: <Zap className="w-2 h-2" />, color: 'from-orange-500 to-yellow-500' }
      ]
    },
    'Quality & Testing': {
      icon: <Shield className="w-3 h-3" />,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Jest', level: 80, icon: <CheckCircle className="w-2 h-2" />, color: 'from-green-400 to-teal-400' },
        { name: 'Mocha', level: 75, icon: <CheckCircle className="w-2 h-2" />, color: 'from-teal-400 to-cyan-400' }
      ]
    }
  }


  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Reduced floating elements */}
      <div className="absolute top-8 left-4 w-20 h-20 bg-blue-500/5 rounded-xl blur-xl animate-pulse"></div>
      <div className="absolute top-16 right-8 w-16 h-16 bg-purple-500/8 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-12 left-1/4 w-24 h-24 bg-cyan-500/6 rounded-2xl blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-8 right-1/3 w-18 h-18 bg-green-500/7 rounded-xl blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      {/* Simplified gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-2xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      
      <div className="max-w-5xl mx-auto px-3 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-lg border border-white/10">
            <Brain className="w-3 h-3 text-blue-300 mr-2" />
            <span className="text-blue-200 font-medium text-xs">Skills & Expertise</span>
            <Coffee className="w-3 h-3 text-purple-300 ml-2" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h2>
          
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Modern full-stack technologies mastered through hands-on development of secure, scalable applications.
          </p>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {Object.entries(skillCategories).map(([categoryName, category], categoryIndex) => (
            <div key={categoryName} className="group">
              {/* Compact Category Header */}
              <div className="flex items-center mb-3">
                <div className={`w-6 h-6 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold text-white">{categoryName}</h3>
              </div>

              {/* Compact Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group/skill bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-lg px-2 py-1.5 hover:border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <div className={`w-4 h-4 bg-gradient-to-br ${skill.color} rounded-sm flex items-center justify-center group-hover/skill:scale-110 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xs font-semibold text-white">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalArsenal