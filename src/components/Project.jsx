import React from 'react'
import {projects} from '../portfolio.js'
import {motion} from 'framer-motion'

export default function Project(){
    
    return(
        <div className='intro projects'>
            {
                projects.map((e, index)=>{
                    return(
                        <motion.a href={e.link} key={index} whileHover={{boxShadow: '6px 6px 10px black'}}>
                            <h3 className='projects--title'>{e.title}</h3>
                            <p>{e.description}</p>
                        </motion.a>    
                    )
                })
            }
            <p>many moree.... comming soon...</p>
        </div>
    )
}