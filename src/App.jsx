import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Form from './Components/Form/Form'
import Contact from './Components/Contact_Form/Contact'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Hobies from './Components/Hobies/Hobies'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Hobies/>
      {/* <Skills/> */}
      <Form/>
      <Contact/>
    </div>
  )
}

export default App