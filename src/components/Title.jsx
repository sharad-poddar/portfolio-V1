import React from 'react'
import { motion } from "framer-motion"


export default function Title({prop}){
    
    console.log(prop);
    return(
        <motion.div className='wrapper'>
            <motion.h2>{prop}</motion.h2>
        </motion.div>
    )
}