import React from 'react'
import {event} from '../portfolio.js';

export default function Activity(){

    console.log(event)
    return(
        <div className='intro'>
            <h3>{event[0].title}</h3>
            <h4 className='intro--role'>{event[0].description}</h4>
            <p>{event[0].fromMySide}</p>
        </div>
    )
}