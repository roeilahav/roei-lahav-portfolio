import { Code, Database, Server, Globe, CheckCircle, Zap, Brain, Coffee, Cloud, Cpu, Terminal, Star, Award, TrendingUp, Shield, Layers, Palette, Smartphone } from 'lucide-react'
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiReactquery, 
  SiRedux, 
  SiMui, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiPython,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker
} from 'react-icons/si'

const TechnicalArsenal = () => {
  const skillCategories = {
    'Frontend & UI': {
      icon: <Palette className="w-3 h-3" />,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React', level: 95, icon: <SiReact className="w-4 h-4" />, color: 'from-blue-400 to-cyan-400' },
        { name: 'TypeScript', level: 90, icon: <SiTypescript className="w-4 h-4" />, color: 'from-blue-500 to-indigo-500' },
        { name: 'Next.js', level: 90, icon: <SiNextdotjs className="w-4 h-4" />, color: 'from-gray-600 to-gray-800' },
        { name: 'React Query', level: 85, icon: <SiReactquery className="w-4 h-4" />, color: 'from-red-400 to-red-600' },
        { name: 'Redux', level: 85, icon: <SiRedux className="w-4 h-4" />, color: 'from-purple-500 to-purple-700' },
        { name: 'MUI', level: 85, icon: <SiMui className="w-4 h-4" />, color: 'from-blue-600 to-indigo-600' },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="w-4 h-4" />, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    'Backend & Server': {
      icon: <Server className="w-3 h-3" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 95, icon: <SiNodedotjs className="w-4 h-4" />, color: 'from-green-400 to-emerald-400' },
        { name: 'Express.js', level: 90, icon: <SiExpress className="w-4 h-4" />, color: 'from-gray-500 to-slate-500' },
        { name: 'Java', level: 85, icon: <SiOpenjdk className="w-4 h-4" />, color: 'from-red-500 to-orange-500' },
        { name: 'Python', level: 80, icon: <SiPython className="w-4 h-4" />, color: 'from-blue-500 to-green-500' }
      ]
    },
    'Database & Storage': {
      icon: <Database className="w-3 h-3" />,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 90, icon: <SiMongodb className="w-4 h-4" />, color: 'from-green-500 to-green-600' },
        { name: 'SQL', level: 85, icon: <SiMysql className="w-4 h-4" />, color: 'from-blue-600 to-blue-700' },
        { name: 'Redis', level: 80, icon: <SiRedis className="w-4 h-4" />, color: 'from-red-400 to-red-500' }
      ]
    },
    'Architecture & DevOps': {
      icon: <Cloud className="w-3 h-3" />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'RESTful APIs', level: 95, icon: <Globe className="w-4 h-4" />, color: 'from-green-500 to-teal-500' },
        { name: 'Microservices', level: 85, icon: <Layers className="w-4 h-4" />, color: 'from-purple-500 to-indigo-500' },
        { name: 'Docker', level: 80, icon: <SiDocker className="w-4 h-4" />, color: 'from-blue-500 to-blue-600' }
      ]
    }
  }


  return (
    <section id="skills" className="py-16 relative overflow-hidden">
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

        {/* Enhanced Professional Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(skillCategories).map(([categoryName, category], categoryIndex) => (
            <div 
              key={categoryName} 
              className="group relative animate-fade-in-up"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              {/* Compact Category Header */}
              <div className="flex items-center mb-6 group-hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-3 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:shadow-purple-500/30`}>
                    <div className="w-4 h-4 text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-200 transition-colors duration-300">
                    {categoryName}
                  </h3>
                </div>
              </div>

              {/* Compact Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group/skill relative bg-gradient-to-br from-white/8 via-white/12 to-white/5 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-3 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transform-gpu cursor-pointer"
                    style={{animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`}}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center shadow-md transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6`}>
                        <div className="w-4 h-4 text-white">
                          {skill.icon}
                        </div>
                      </div>
                      
                      <h4 className="text-sm font-semibold text-white tracking-wide group-hover/skill:text-purple-200 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category completion indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-center space-x-2 text-purple-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">{category.skills.length} Technologies Mastered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalArsenal