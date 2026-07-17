const focusAreas = [
  "Backend development with Python and Django",
  "REST API design and development",
  "ETL processes and data pipelines",
  "Enterprise system integrations",
  "PostgreSQL and Snowflake",
  "API and database performance",
  "Automated testing and production support",
  "Docker, Terraform, Azure, and CI/CD",
];

const CheckIcon = () => (
  <div className="bg-white/20 p-2 rounded-full mr-4 flex-shrink-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-full">
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  My Journey
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  I am a Computer Science graduate from Wayne State University
                  and a Backend Software Engineer at Carhartt. I build and
                  support backend systems for e-commerce, order visibility, and
                  supply-chain operations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What I Do
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  I design and build REST APIs using Python, Django, Django REST
                  Framework, and Django Ninja. I also develop ETL processes,
                  scheduled jobs, data backfills, and system integrations that
                  move business data between PostgreSQL, Snowflake, SAP
                  S/4HANA, SAP Commerce Cloud, Salesforce, and Azure services.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  My work also includes automated testing, database and API
                  performance improvements, CI/CD pipelines, Docker, Terraform,
                  production support, and troubleshooting complex data issues.
                  I work in an Agile team and take part in sprint planning,
                  daily stand-ups, code reviews, testing, and cross-team
                  collaboration.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Development Philosophy
              </h3>

              <p className="text-gray-700">
                Build reliable software that solves real problems. Keep the code
                clean, test the important parts, learn from production issues,
                and continue improving with every project.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-10 text-white h-full">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-400 pb-3">
              Core Focus Areas
            </h3>

            <ul className="space-y-4">
              {focusAreas.map((focusArea) => (
                <li key={focusArea} className="flex items-start">
                  <CheckIcon />
                  <span className="pt-1">{focusArea}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;