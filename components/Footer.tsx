import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/roei-lahav',
      icon: Github,
    },
    {
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/roei-lahav',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:roei.lahav@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <IconComponent size={24} />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © {currentYear} Roei Lahav. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              Built with Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer