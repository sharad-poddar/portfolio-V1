import React from 'react'
import {motion} from 'framer-motion';

export default function Link(){
    
    return(
        <div className='links'> 
            <a href='https://twitter.com/SharadPoddar11' target='_blank'><motion.i class="fa-brands fa-twitter" whileHover={{color: '#1DA1F2', scale: 1.2}} transition={{type: "spring"}}></motion.i></a>
            <a href='www.linkedin.com/in/sharad-poddar-895985283' target='_blank'><motion.i class="fa-brands fa-linkedin" whileHover={{color: '#0A66C2', scale: 1.2}}></motion.i></a>
            <a href='https://github.com/shared460' target='_blank'><motion.i class="fa-brands fa-github" whileHover={{scale: 1.2}} transition={{type: "spring"}}></motion.i></a>
            <a href='https://github.com/sharad-poddar' target='_blank'><motion.i class="fa-brands fa-github" whileHover={{scale: 1.2}} transition={{type: "spring"}}></motion.i></a>
            <motion.button transition={{ duration: 0.2, type:'spring'}} whileHover={{backgroundColor: '#a4c3b2'}}><motion.a href='' whileHover={{color: 'white'}}>resume</motion.a></motion.button>
        </div>
    )
}