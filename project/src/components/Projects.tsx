import { Github, ExternalLink, Code, Database, Globe, Server } from 'lucide-react';

const projects = [
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
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
                <div className="flex gap-2">
                  <a href={project.githubLink} 
                     className="text-gray-500 hover:text-blue-600 transition-colors"
                     target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  <a href="#" 
                     className="text-gray-500 hover:text-blue-600 transition-colors"
                     target="_blank" rel="noopener noreferrer">
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
              {/* Tech Stack Badges */}
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
