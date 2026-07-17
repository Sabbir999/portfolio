import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import Profile from "../img/profile.jpg";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-blob absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600 mix-blend-soft-light blur-3xl"></div>

        <div className="animate-blob animation-delay-2000 absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-600 mix-blend-soft-light blur-3xl"></div>

        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-600 mix-blend-soft-light blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Profile picture */}
          <div className="group relative flex-shrink-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-75 blur transition-all duration-500 group-hover:opacity-100"></div>

            <img
              src={Profile}
              alt="Saifur Sabbir"
              className="relative z-10 h-56 w-56 rounded-full border-4 border-gray-800 object-cover object-center"
            />
          </div>

          {/* Introduction */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block">Saifur Sabbir</span>

              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Backend Software Engineer
              </span>
            </h1>

            <div className="mb-6 flex items-center justify-center gap-2 text-gray-300 md:justify-start">
              <MapPin className="text-blue-400" size={20} />
              <span>Detroit, Michigan</span>
            </div>

            <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-gray-300 md:mx-0">
              Backend Software Engineer at Carhartt building REST APIs, ETL
              processes, and data integrations for e-commerce and supply-chain
              systems.
            </p>

            <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:mx-0">
              Experienced with Python, Django, Django REST Framework, Django
              Ninja, PostgreSQL, Snowflake, Azure, Docker, Terraform, and CI/CD
              pipelines.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://www.linkedin.com/in/saifur-sabbir-591981288/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Saifur Sabbir's LinkedIn profile"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Linkedin size={20} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Sabbir999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Saifur Sabbir's GitHub profile"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Github size={20} className="text-gray-100" />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:saifursabbir999@gmail.com"
                aria-label="Email Saifur Sabbir"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Mail size={20} className="text-red-400" />
                <span>Email</span>
              </a>

              <a
                href="/Saifur_Sabbir.pdf"
                download="Saifur_Sabbir_Resume.pdf"
                aria-label="Download Saifur Sabbir's resume"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;