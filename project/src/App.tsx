import About from './components/About.tsx';
import Header from './components/Header.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Footer from './components/Footer.tsx';
import Contact from './components/Contact.tsx';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <Header />
    <main className="max-w-8xl mx-auto px-6 py-16">
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact/>
    </main>
    <Footer />
  </div>
  );
}

export default App;