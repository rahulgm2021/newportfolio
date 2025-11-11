import React, { useState, useEffect } from 'react';
import { Menu, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const portfolioData = {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    about: "Passionate developer with 5 years of experience building scalable web applications. Focused on creating elegant solutions to complex problems.",
    skills: [
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
      { name: "DevOps", items: ["AWS", "Docker", "CI/CD", "Kubernetes"] }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Built a full-featured e-commerce platform with real-time inventory management.",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://project1.com"
      },
      {
        title: "Analytics Dashboard",
        description: "Created a responsive analytics dashboard with interactive data visualizations.",
        tech: ["React", "D3.js", "Firebase"],
        link: "https://project2.com"
      },
      {
        title: "Task Management App",
        description: "Developed a collaborative task management application with real-time updates.",
        tech: ["TypeScript", "Socket.io", "PostgreSQL"],
        link: "https://project3.com"
      }
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="font-bold text-xl text-gray-800">{portfolioData.name}</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeSection === section
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}>
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full px-3 py-2 text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white pt-16">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{portfolioData.name}</h1>
            <p className="text-2xl text-gray-600 mb-8">{portfolioData.title}</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600">
                <Mail size={24} />
              </a>
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto text-center">
            {portfolioData.about}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.skills.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:contact@example.com" className="flex items-center text-gray-600 hover:text-blue-600">
              <Mail size={24} className="mr-2" />
              <span>Email</span>
            </a>
            <a href="https://github.com" className="flex items-center text-gray-600 hover:text-blue-600">
              <Github size={24} className="mr-2" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center text-gray-600 hover:text-blue-600">
              <Linkedin size={24} className="mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default portfolio;