const Education = () => {
    return (
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Wayne State University</h3>
              <p className="text-lg text-gray-600">Bachelor of Science in Computer Science</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600">
                Expected Graduation: 2025
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  