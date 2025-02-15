import { Code, Server } from 'lucide-react';

const programmingSkills = [
  { name: "Python", level: "Advanced", width: "90%" },
  { name: "Java", level: "Advanced", width: "85%" },
  { name: "JavaScript/TypeScript", level: "Intermediate", width: "75%" },
  { name: "C++", level: "Intermediate", width: "70%" }
];

const technologies = ["React.js", "Node.js", "Django", "Git","Docker","Linux", "MySQL", "PostgreSQL"];

const Skills = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Code className="text-blue-600" />
            Programming Languages
          </h3>
          <div className="space-y-4">
            {programmingSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: skill.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Server className="text-blue-600" />
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
