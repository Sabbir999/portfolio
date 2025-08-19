import { Code, Server, Cpu, Database, GitBranch, Layout } from 'lucide-react';

const programmingSkills = [
  { name: "Python", level: "Advanced", width: "90%" },
  { name: "Java", level: "Advanced", width: "85%" },
  { name: "JavaScript/TypeScript", level: "Intermediate", width: "75%" },
  { name: "C++", level: "Intermediate", width: "70%" },
  { name: "C", level: "Intermediate", width: "70%" }
];

const technologies = [
  { name: "React.js", icon: Layout, color: "text-blue-500" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "Django", icon: Cpu, color: "text-emerald-500" },
  { name: "Git", icon: GitBranch, color: "text-orange-500" },
  { name: "Docker", icon: null, color: "text-blue-400" },
  { name: "Linux", icon: null, color: "text-yellow-500" },
  { name: "MySQL", icon: Database, color: "text-blue-400" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-500" }
];

const Skills = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Technical Skills
          </h2>
          {/*<div className="h-1 w-full bg-blue-600 mx-auto mt-4 rounded-full"></div> */}
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            My technical expertise across programming languages, frameworks, and development tools
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Programming Languages</h3>
            </div>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.level}</span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out group-hover:opacity-90"
                        style={{ width: skill.width }}
                      ></div>
                    </div>
                    <div className="absolute top-0 right-0 h-3 w-1 bg-white animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
              <h4 className="font-bold text-gray-800 mb-3">Development Approach</h4>
              <p className="text-gray-700">
                Focus on clean, maintainable code with an emphasis on performance optimization 
                and scalability principles.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Server className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technologies & Tools</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors group"
                >
                  {tech.icon ? (
                    <tech.icon 
                      size={32} 
                      className={`mb-2 ${tech.color} group-hover:text-blue-600 transition-colors`} 
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mb-2" />
                  )}
                  <span className="text-center font-medium text-gray-800">{tech.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
              <h4 className="font-bold text-gray-800 mb-3">Technical Philosophy</h4>
              <p className="text-gray-700">
                Selecting the right tools for each challenge while staying current with 
                evolving technology landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;