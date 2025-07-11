const Education = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
      </div>

      {/* Bachelor's Degree */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-gray-900">Wayne State University, Detroit, MI</h3>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600">
              Graduation: May 2025
            </span>
          </div>
          <p className="text-lg text-gray-600">Bachelor of Science in Computer Science</p>
          <p className="text-lg text-gray-600">GPA: 3.97</p>
          <p className="text-lg text-gray-600">Awards: Summa Cum Laude, Dean’s List</p>
          <p className="text-lg text-gray-600 mt-2">
            <strong>Relevant Courses:</strong> Data Structures and Algorithms, Computer Architecture, Database Management, Software Engineering, Linear Algebra, Operating Systems, Theoretical Computation, Capstone Project, Artificial Intelligence
          </p>
        </div>
      </div>

      {/* Master's Degree */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-gray-900">Wayne State University, Detroit, MI</h3>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600">
              Expected: Dec 2027
            </span>
          </div>
          <p className="text-lg text-gray-600">MS in AI Algorithms and Systems</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
