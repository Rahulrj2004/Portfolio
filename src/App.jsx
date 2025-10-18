import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Studies from './sections/Studies'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Element } from 'react-scroll'

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="work">
        <Projects />
      </Element>

      <Element name="studies">
        <Studies />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App