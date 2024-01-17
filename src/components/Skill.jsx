import React from 'react'
import {skills} from '../portfolio.js'
import {motion} from 'framer-motion'

export default function Skill(){
    return(
        <div className='skills'>
                <ul className='skills--list'>{ skills.length >0 && skills.map((skill, index)=>{
                    return (<motion.li key={index} whileHover={{backgroundColor:"#a4c3b2", color: 'white'}}>{skill}</motion.li>)
                })}</ul>
        </div>
    )
}