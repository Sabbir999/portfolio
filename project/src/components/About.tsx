const About = () => {
    return (
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            As a Computer Science student at Wayne State University, I combine strong theoretical foundations with practical development experience.
            My focus lies in creating efficient, scalable software solutions that solve real-world problems. I'm particularly passionate about full-stack
            development and continuously expanding my technical expertise through hands-on projects and academic research.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  