import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Profile from '../img/profile.jpg'; // Adjust path as needed

const Header = () => {
  return (
    <header className="bg-white shadow-lg w-full">
      <div className="mx-auto max-w-4xl px-6 py-16 flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:items-center gap-8 w-full">
          {/* Profile Picture */}
          <img
            src={Profile}
            alt="Saifur Sabbir"
            className="w-64 h-64 rounded-full object-cover object-center mx-auto md:mx-0"
          />

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              Saifur Sabbir
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-4">
              <MapPin className="text-blue-600" size={18} />
              <span>Detroit, MI</span>
            </div>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto md:mx-0">
              Computer Science student at Wayne State University specializing
              in full-stack development and scalable software solutions.
            </p>

            {/* Buttons Row (no flex-wrap) */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/saifur-sabbir-591981288/"
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Sabbir999"
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="text-gray-900" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:saifursabbir999@gmail.com"
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Mail size={20} className="text-red-600" />
                <span>Email</span>
              </a>
              <a
                href="/Saifur_Sabbir.pdf"
                download="Saifur_Sabbir_Resume.pdf"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
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
