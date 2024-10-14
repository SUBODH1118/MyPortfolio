import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Form from './Components/Form/Form'
import Contact from './Components/Contact_Form/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Form/>
      <Contact/>
    </div>
  )
}

export default App