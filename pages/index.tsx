import Layout from '../components/Layout'
import { ArrowRight, Code, Coffee } from 'lucide-react'

const Home = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="text-blue-600">Roei Lahav</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Full Stack Developer
            </p>
            
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              I create modern, scalable web applications using React, Node.js, and TypeScript. 
              Passionate about clean code, user experience, and building products that make a difference.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack</h3>
                <p className="text-gray-600">Frontend & Backend Development</p>
              </div>
              
              <div className="text-center">
                <Coffee className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2+ Years</h3>
                <p className="text-gray-600">Professional Experience</p>
              </div>
              
              <div className="text-center">
                <ArrowRight className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Projects</h3>
                <p className="text-gray-600">Completed Successfully</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home