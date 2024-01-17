import React from 'react'
import Title from './components/Title'
import './App.css'
import Intro from './components/Intro'
import Skill from './components/Skill'
import Project from './components/Project'
import Activity from './components/Activity'
import Link from './components/Link'
import Footer from './components/Footer'
import About from './components/About'

import {motion} from 'framer-motion';
import Scroll from './components/Scroll'
import Mail from './components/Mail'

export default function App(){

  return(
    <motion.div>
      <Scroll/>
      <Title prop={'Intro'}/>
      <Intro/>
      <Title prop={'About'}/>
      <About/>
      <Title prop={'Skills'}/>
      <Skill/>
      <Title prop={'Projects'}/>
      <Project/>
      <Title prop={'Activites'}/>
      <Activity/>
      <Title prop={'contacts'}/>
      <Link/>
      <Title prop={'Mail-Me 👋'}/>
      <Mail/>
      <Footer/>
    </motion.div>
  )
}

