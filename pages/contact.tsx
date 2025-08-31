import { useState } from 'react'
import Layout from '../components/Layout'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react'
import { FormData } from '../types'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'roei.lahav@example.com',
      href: 'mailto:roei.lahav@example.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+972-50-123-4567',
      href: 'tel:+972501234567'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Tel Aviv, Israel',
      href: null
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/roei-lahav',
      icon: <Github size={20} />,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/roei-lahav',
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
      
      {/* Contact Details */}
      <div className="space-y-6 mb-8">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center">
            <div className="text-blue-600 mr-4">
              {detail.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-900 font-medium">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-600 transition-all duration-200 ${link.color} hover:border-gray-300 hover:shadow-sm`}
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center">
          <CheckCircle className="text-green-600 mr-2" size={20} />
          <span className="text-green-800 font-medium">Available for new opportunities</span>
        </div>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600">
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a job opportunity, project idea, or just want to say hello, 
              I'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <ContactInfo />
              
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Contact