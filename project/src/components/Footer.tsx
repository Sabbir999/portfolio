import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2024 Saifur Sabbir. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/saifur-sabbir-591981288/" 
               className="text-gray-400 hover:text-blue-600 transition-colors"
               target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Sabbir999" 
               className="text-gray-400 hover:text-gray-900 transition-colors"
               target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="mailto:saifursabbir999@gmail.com" 
               className="text-gray-400 hover:text-red-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
