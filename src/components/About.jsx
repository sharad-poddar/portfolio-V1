import React from 'react'
import {about_1} from '../portfolio.js'

export default function About(){
    return(
        <div className='intro about'>
            <p><span>college</span>: {about_1[0].college}</p>
            <p><span>year_of_graduation</span>: {about_1[0].graduation_year}</p>
            <p><span>currently_living</span>: {about_1[0].currently_Living}</p>
            <p><span>languages</span>: {about_1[0].languages}</p>
            <p><span>other_activites</span>: {about_1[0].activity}</p>
            <p><span>moto</span>: {about_1[0].beleives}</p>
            <p><span>song_i_like</span>: {about_1[0].favourite_song}</p>
        </div>
    )
}