import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Coffee, ExternalLink, Calendar, Clock, Zap, Star } from 'lucide-react'

const LetsWorkTogether = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 5000)
  }

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
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
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-3 py-1 mb-4 backdrop-blur-lg border border-white/10">
            <Zap className="w-3 h-3 text-blue-300 mr-1" />
            <span className="text-xs text-blue-200 font-medium">Available for Projects</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences? 
            Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          {/* Contact Info - Compact Style */}
          <div className="xl:col-span-5 space-y-3">
            {/* Main Contact Card */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:border-white/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Coffee size={14} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Get In Touch</h3>
              </div>
              
              <div className="space-y-3">
                <div className="group/item flex items-center p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                    <Mail size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Email</p>
                    <a href="mailto:roeilahaving@gmail.com" className="text-white font-bold text-sm hover:text-blue-300 transition-colors duration-300">
                      roeilahaving@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="group/item flex items-center p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                    <Phone size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Phone</p>
                    <a href="tel:+972526828606" className="text-white font-bold text-sm hover:text-green-300 transition-colors duration-300">
                      052-682-8606
                    </a>
                  </div>
                </div>
                
                <div className="group/item flex items-center p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Location</p>
                    <p className="text-white font-bold text-sm">Tel Aviv, Israel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Social Links */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/roeilahav"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-lg p-3 text-center hover:border-white/30 hover:bg-white/15 transition-all duration-300 hover:shadow-md hover:shadow-gray-500/20"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Github size={16} className="text-white" />
                </div>
                <p className="text-white font-bold text-sm">GitHub</p>
                <p className="text-gray-400 text-xs">View Projects</p>
              </a>
              
              <a
                href="https://www.linkedin.com/in/roeilahav/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-lg p-3 text-center hover:border-white/30 hover:bg-white/15 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={16} className="text-white" />
                </div>
                <p className="text-white font-bold text-sm">LinkedIn</p>
                <p className="text-gray-400 text-xs">Professional</p>
              </a>
            </div>

            {/* Compact Status Cards */}
            <div className="space-y-2">
              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-xl border border-green-400/30 rounded-lg p-3 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-2">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-green-300 font-bold text-sm">Available Now</p>
                    <p className="text-green-200 text-xs">Open for new opportunities</p>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-xl border border-blue-400/30 rounded-lg p-3 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                    <Clock size={12} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-blue-300 font-bold text-sm">Quick Response</p>
                    <p className="text-blue-200 text-xs">Usually within 24 hours</p>
                  </div>
                  <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Compact Contact Form */}
          <div className="xl:col-span-7">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <Send size={14} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Send Message</h3>
                  <p className="text-gray-300 text-xs">Let's discuss your next project</p>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                      <Star className="w-3 h-3 text-white" fill="currentColor" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-300 mb-3">Thank you for reaching out!</p>
                  <div className="inline-flex items-center bg-green-500/20 rounded-full px-4 py-2 backdrop-blur-lg border border-green-400/30">
                    <Clock className="w-3 h-3 text-green-300 mr-2" />
                    <span className="text-green-200 text-xs font-medium">I'll respond within 24 hours</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="block text-white font-bold text-xs uppercase tracking-wide">Name *</label>
                      <div className="relative">
                        <input
                          id="contact-name"
                          type="text"
                          required
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className={`w-full px-3 py-2 bg-white/5 backdrop-blur-lg border ${
                            errors.name ? 'border-red-400' : 'border-white/20'
                          } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all duration-300 hover:bg-white/10 text-sm`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p id="name-error" className="text-red-400 text-xs mt-1 font-medium" role="alert">{errors.name}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block text-white font-bold text-xs uppercase tracking-wide">Email *</label>
                      <div className="relative">
                        <input
                          id="contact-email"
                          type="email"
                          required
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className={`w-full px-3 py-2 bg-white/5 backdrop-blur-lg border ${
                            errors.email ? 'border-red-400' : 'border-white/20'
                          } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all duration-300 hover:bg-white/10 text-sm`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-400 text-xs mt-1 font-medium" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>


                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-white font-bold text-xs uppercase tracking-wide">Message *</label>
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className={`w-full px-3 py-2 bg-white/5 backdrop-blur-lg border ${
                          errors.message ? 'border-red-400' : 'border-white/20'
                        } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all duration-300 resize-none hover:bg-white/10 text-sm`}
                        placeholder="Tell me about your project, goals, timeline, and how I can help bring your vision to life..."
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-400 text-xs mt-1 font-medium" role="alert">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Sending your message..." : "Send your message"}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-sm py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-2 focus:ring-purple-400/50"
                  >
                    <div className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" aria-hidden="true"></div>
                          <span className="text-sm">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
                          <span className="text-sm">Send Message</span>
                          <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                            →
                          </div>
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LetsWorkTogether