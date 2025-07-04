import { Github, ExternalLink, Code, Database, Globe, Server } from 'lucide-react';

const projects = [
  {
    name: "Mini Version Control System",
    description:
      "A lightweight, Git-inspired version control system built using Java, featuring core Git functionalities through a CLI interface.",
    githubLink: "https://github.com/Sabbir999/Mini-VCS", // Replace with your actual repo link if different
    techStack: [
      { name: "Java", color: "bg-blue-100 text-blue-600" },
      { name: "SHA-1", color: "bg-gray-100 text-gray-600" },
      { name: "JSON", color: "bg-yellow-100 text-yellow-600" },
      { name: "CLI", color: "bg-indigo-100 text-indigo-600" }
    ],
    features: [
      { icon: Code, text: "Core Git commands: init, add, commit, log, checkout, diff" },
      { icon: Database, text: "Commit history with SHA-1 hashing & JSON serialization" },
      { icon: Server, text: "Modular CLI with OOP design and future support for branching" }
    ]
  },
  {
    name: "CareConnect",
    description: "A comprehensive healthcare management system built with React and Node.js.",
    githubLink: "https://github.com/WSU-4110/CareConnect.git",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-600" },
      { name: "Node.js", color: "bg-green-100 text-green-600" },
      { name: "MongoDB", color: "bg-purple-100 text-purple-600" },
      { name: "Express", color: "bg-orange-100 text-orange-600" }
    ],
    features: [
      { icon: Code, text: "Real-time appointment scheduling" },
      { icon: Database, text: "Secure patient records management" },
      { icon: Globe, text: "Integrated notification system" }
    ]
  },
  {
    name: "PyE-Commerce",
    description: "A full-featured e-commerce platform developed with Python and Django.",
    githubLink: "https://github.com/Sabbir999/PyE-Commerce.git",
    techStack: [
      { name: "Python", color: "bg-blue-100 text-blue-600" },
      { name: "Django", color: "bg-green-100 text-green-600" },
      { name: "PostgreSQL", color: "bg-purple-100 text-purple-600" },
      { name: "Bootstrap", color: "bg-orange-100 text-orange-600" }
    ],
    features: [
      { icon: Server, text: "Advanced product management" },
      { icon: Database, text: "Secure payment processing" },
      { icon: Globe, text: "Responsive user interface" }
    ]
  },
  {
    name: "GroceryPro",
    description:
      "A Django-based web application enabling users to create personalized grocery lists, track prices, and compare real-time product prices across stores. Features Selenium scraping with advanced data organization using the Ollama Lama 3 model, integrated API notifications, and location suggestions.",
    githubLink: "https://github.com/Prangon108/GroceryPro",
    techStack: [
      { name: "Python", color: "bg-blue-100 text-blue-600" },
      { name: "Django", color: "bg-green-100 text-green-600" },
      { name: "Selenium", color: "bg-yellow-100 text-yellow-600" },
      { name: "AWS", color: "bg-purple-100 text-purple-600" },
      { name: "Ollama Lama 3", color: "bg-indigo-100 text-indigo-600" },
      { name: "PostgreSQL", color: "bg-pink-100 text-pink-600" }
    ],
    features: [
      { icon: Code, text: "Personalized list management & Selenium scraping" },
      { icon: Database, text: "Real-time price tracking & comparison" },
      { icon: Globe, text: "Integrated API notifications & location suggestions" }
    ]
  }
];

const Projects = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.githubLink}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <feature.icon size={16} className="text-blue-600" />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${tech.color}`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
