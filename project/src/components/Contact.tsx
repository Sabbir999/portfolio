import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="pt-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I’m always open to discussing new opportunities, collaborations, or just tech in general. Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:srsabbir206@gmail.com"
             className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <Mail size={20} className="text-red-600" />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/saifur-sabbir-591981288/"
             className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
             target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="text-blue-600" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Sabbir999"
             className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
             target="_blank" rel="noopener noreferrer">
            <Github size={20} className="text-gray-900" />
            <span>GitHub</span>
          </a>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            <MessageCircle size={20} />
            <span>Send a Message</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
