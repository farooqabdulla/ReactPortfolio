import React from 'react'
import Nav from './Nav'
import { Stack } from '@mui/material'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import Projects from './Projects'
import Contact from './Contact'


const Home1 = () => {
  return (
    <Stack sx={{bgcolor:'#04214F',width:'100%',minHeight:'100vh'}}>
        <Nav/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </Stack>
  )
}

export default Home1