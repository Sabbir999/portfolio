import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Profile from '../img/profile.jpg'; // Adjust path as needed

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Picture with decorative border */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <img
              src={Profile}
              alt="Saifur Sabbir"
              className="relative w-56 h-56 rounded-full object-cover object-center border-4 border-gray-800 z-10"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-2">
              
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="block">Saifur Sabbir</span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-6">
              <MapPin className="text-blue-400" size={20} />
              <span>Detroit, MI</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Computer Science graduate from Wayne State University with experience building scalable web applications using modern tech stacks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/saifur-sabbir-591981288/"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Sabbir999"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="text-gray-100" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:saifursabbir999@gmail.com"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <Mail size={20} className="text-red-400" />
                <span>Email</span>
              </a>
               <a
                href="/Saifur_Sabbir.pdf"
                download="Saifur_Sabbir_Resume.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-500/20"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
            
            {/* Resume Button */}
           
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      
    </header>
  );
};

export default Header;