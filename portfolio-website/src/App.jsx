import Hero from './Sections/Hero'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Navbar from './Layout/Navbar'
import { Footer } from './Layout/Footer'


function App() {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
