import React from 'react'
import {about} from '../portfolio.js'

export default function Intro(){
    
    console.log();
    return(
        <div className='intro'>
            <h3 className='intro--name'>{about.name}</h3>
            <h4 className='intro--role'>{about.role}</h4>
            <p className='intro--des'>{about.description}</p>
        </div>
    )
}