import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Let's Connect
          </h2>
          {/*<div className="h-1 w-full bg-blue-600 mx-auto mt-4 rounded-full"></div> */}
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or tech in general
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:srsabbir206@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all"
              >
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Email</h4>
                  <p className="text-blue-300">srsabbir206@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/saifur-sabbir-591981288/"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">LinkedIn</h4>
                  <p className="text-blue-300">Saifur Sabbir</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Sabbir999"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-lg">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">GitHub</h4>
                  <p className="text-blue-300">@Sabbir999</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/20"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;