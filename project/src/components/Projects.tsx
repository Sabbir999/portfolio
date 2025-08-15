import { Github, Code, Database, Globe, Server, ArrowRight } from 'lucide-react';

const projects = [
  {
    name: "Mini Version Control System",
    description:
      "Git-inspired version control system implementing core Git functionality through a CLI interface",
    githubLink: "https://github.com/Sabbir999/Mini-VCS",
    techStack: [
      { name: "C++", color: "bg-blue-100 text-blue-800" },
      { name: "SHA-1", color: "bg-gray-100 text-gray-800" },
      { name: "JSON", color: "bg-amber-100 text-amber-800" },
      { name: "CLI", color: "bg-indigo-100 text-indigo-800" }
    ],
    features: [
      { icon: Code, text: "Core Git commands: init, add, commit" },
      { icon: Database, text: "Commit history with SHA-1 hashing" },
      { icon: Server, text: "JSON serialization & OOP design" }
    ]
  },
  {
    name: "CareConnect",
    description: "Healthcare management system for patient records and appointment scheduling",
    githubLink: "https://github.com/WSU-4110/CareConnect.git",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-emerald-100 text-emerald-800" },
      { name: "MongoDB", color: "bg-purple-100 text-purple-800" },
      { name: "Express", color: "bg-orange-100 text-orange-800" }
    ],
    features: [
      { icon: Code, text: "Real-time appointment scheduling" },
      { icon: Database, text: "Secure patient records management" },
      { icon: Globe, text: "Integrated notification system" }
    ]
  },
  {
    name: "PyE-Commerce",
    description: "Full-featured e-commerce platform with Django backend",
    githubLink: "https://github.com/Sabbir999/PyE-Commerce.git",
    techStack: [
      { name: "Python", color: "bg-blue-100 text-blue-800" },
      { name: "Django", color: "bg-emerald-100 text-emerald-800" },
      { name: "PostgreSQL", color: "bg-purple-100 text-purple-800" },
      { name: "Bootstrap", color: "bg-orange-100 text-orange-800" }
    ],
    features: [
      { icon: Server, text: "Advanced product management" },
      { icon: Database, text: "Secure payment processing" },
      { icon: Globe, text: "Responsive UI/UX design" }
    ]
  },
  {
    name: "GroceryPro",
    description: "AI-enhanced grocery shopping assistant with price tracking and comparison",
    githubLink: "https://github.com/Prangon108/GroceryPro",
    techStack: [
      { name: "Python", color: "bg-blue-100 text-blue-800" },
      { name: "Django", color: "bg-emerald-100 text-emerald-800" },
      { name: "Selenium", color: "bg-amber-100 text-amber-800" },
      { name: "Ollama", color: "bg-indigo-100 text-indigo-800" },
      { name: "PostgreSQL", color: "bg-pink-100 text-pink-800" }
    ],
    features: [
      { icon: Code, text: "Personalized list management" },
      { icon: Database, text: "Real-time price tracking" },
      { icon: Globe, text: "Location-based suggestions" }
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my technical projects showcasing full-stack development, system design, and problem-solving skills
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <a
                    href={project.githubLink}
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-2">Key Features</span>
                    <ArrowRight size={16} className="text-blue-600" />
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <feature.icon size={18} className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-auto px-6 pb-6">
                <a
                  href={project.githubLink}
                  className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;