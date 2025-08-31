import { Experience, Skill } from '@/types'
import Layout from '../components/Layout'
import { Download, MapPin, Calendar, Code, Database, Server, Globe } from 'lucide-react'


const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 5 },
  { name: 'Next.js', category: 'Frontend', level: 5 },
  { name: 'TypeScript', category: 'Frontend', level: 4 },
  { name: 'JavaScript', category: 'Frontend', level: 5 },
  { name: 'HTML5/CSS3', category: 'Frontend', level: 5 },
  { name: 'TailwindCSS', category: 'Frontend', level: 4 },
  { name: 'Redux', category: 'Frontend', level: 3 },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 4 },
  { name: 'Express.js', category: 'Backend', level: 4 },
  { name: 'REST APIs', category: 'Backend', level: 4 },
  { name: 'GraphQL', category: 'Backend', level: 3 },
  { name: 'Socket.io', category: 'Backend', level: 3 },
  
  // Database
  { name: 'MongoDB', category: 'Database', level: 4 },
  { name: 'PostgreSQL', category: 'Database', level: 3 },
  { name: 'Redis', category: 'Database', level: 2 },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 4 },
  { name: 'Docker', category: 'Tools', level: 3 },
  { name: 'AWS', category: 'Tools', level: 2 },
  { name: 'Vercel', category: 'Tools', level: 4 },
]

const experience: Experience[] = [
  {
    company: 'Tech Solutions Ltd.',
    position: 'Full Stack Developer',
    location: 'Tel Aviv, Israel',
    period: 'June 2023 - Present',
    current: true,
    description: [
      'Developed and maintained web applications using React, Node.js, and MongoDB',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive designs and optimized application performance',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS']
  },
  {
    company: 'Digital Agency Co.',
    position: 'Frontend Developer',
    location: 'Remote',
    period: 'January 2022 - May 2023',
    current: false,
    description: [
      'Built responsive web applications using React and TypeScript',
      'Worked closely with UX/UI designers to implement pixel-perfect designs',
      'Optimized application performance and implemented lazy loading',
      'Integrated third-party APIs and services'
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Next.js']
  }
]

const SkillBar = ({ skill }: { skill: Skill }) => {
  const icons = {
    Frontend: <Globe size={20} />,
    Backend: <Server size={20} />,
    Database: <Database size={20} />,
    Tools: <Code size={20} />
  }

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-blue-600 mr-2">{icons[skill.category]}</span>
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(skill.level / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
          <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <div className="flex items-center text-gray-500 mb-1">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{exp.period}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{exp.location}</span>
          </div>
          {exp.current && (
            <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Current
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {exp.description.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-blue-600 mr-2 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

const About = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">RL</span>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                    I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
                  </p>
                  <p className="mb-6">
                    With a strong foundation in both frontend and backend development, I enjoy working on 
                    challenging projects that push the boundaries of what's possible on the web. My goal is 
                    to write clean, maintainable code while delivering exceptional user experiences.
                  </p>
                  <p className="mb-8">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or enjoying the beautiful beaches of Tel Aviv.
                  </p>
                </div>

                <a
                  href="/resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Skills & Technologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {category}
                  </h3>
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Work Experience
            </h2>
            
            {experience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About