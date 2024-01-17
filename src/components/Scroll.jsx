import React from 'react'
import { motion, useScroll, useSpring} from "framer-motion"

export default function Scroll(){
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress)


    return <motion.div style={{ scaleX }} className='scroll'/>
}