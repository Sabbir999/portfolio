const Education = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Education
          </h2>
          {/*<div className="h-1 w-full bg-blue-600 mx-auto mt-4 rounded-full"></div> */}
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-0 md:left-1/2 md:-ml-1 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-indigo-200"></div>
          
          {/* Bachelor's Degree */}
          <div className="mb-12 flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block md:w-1/2"></div> {/* Spacer for desktop */}
            
            <div className="w-full md:w-1/2 pl-8 md:pl-16 relative">
              <div className="absolute -left-2 top-5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5">
                  <div className="flex justify-between items-center flex-wrap">
                    <h3 className="text-2xl font-bold text-white">Wayne State University</h3>
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 text-white text-sm mt-2 md:mt-0">
                      Graduation: May 2025
                    </span>
                  </div>
                  
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">GPA: 3.97</span>
                      <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm">Summa Cum Laude</span>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">Dean's List</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">Relevant Coursework</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Data Structures & Algorithms</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Computer Architecture</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Database Management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Software Engineering</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Operating Systems</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Artificial Intelligence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Master's Degree */}
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="w-full md:w-1/2 pr-8 md:pr-16 md:text-right relative">
              <div className="absolute -right-2 top-5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white z-10 md:-right-2"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
                  <div className="flex justify-between items-center flex-wrap">
                    <h3 className="text-2xl font-bold text-white">Wayne State University</h3>
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 text-white text-sm mt-2 md:mt-0">
                      Expected: Dec 2027
                    </span>
                  </div>
                 
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">MS in AI Algorithms and Systems</h4>
                    <p className="text-gray-700 mt-2">
                      Advanced studies focusing on artificial intelligence algorithms, machine learning systems, 
                      and their practical applications in real-world scenarios.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      <span>Research Focus</span>
                    </h5>
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm">Machine Learning</span>
                      <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm">Neural Networks</span>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">AI Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div> {/* Spacer for desktop */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;