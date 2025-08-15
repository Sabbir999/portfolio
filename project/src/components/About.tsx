const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            About Me
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  As a Computer Science graduate from Wayne State University, I combine strong theoretical foundations with practical development experience. My focus lies in creating efficient, scalable software solutions that address real-world problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Passion</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I am particularly passionate about full-stack development and continuously expand my technical expertise through hands-on projects and professional growth. I thrive on transforming complex challenges into elegant, maintainable solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development Philosophy</h3>
              <p className="text-gray-700">
                "Build with purpose, engineer with precision, and deliver with excellence. Every line of code should solve a problem or create value."
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-10 text-white">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 border-b border-blue-400 pb-3">Core Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Full-stack architecture design</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Scalable system development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Continuous learning & growth</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Database design & management </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>API development & integration</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Data structures & algorithm</span>
                </li>
              </ul>
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;