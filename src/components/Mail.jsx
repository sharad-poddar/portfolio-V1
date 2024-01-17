import React from 'react'
import {contact} from '../portfolio.js'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion';

export default function Mail(){

    const [name, setname] = React.useState('');
    const [msg, setMsg] = React.useState('');

    function handelSubmit(e){
        e.preventDefault();

        emailjs.send('service_nzzei4a', 'template_2ptp5uz', {name: name, message: msg}, 'NckaxpnafZbVArg3n')
            .then(function() {
            alert('mail sent succesfully... ❤️')
        }, function(error) {
            console.log(error);
            alert('mail sent un-succesfully... 💔')
        });

        setname('');
        setMsg('');
    }

    return(
        <div className='mail'>
            <motion.p className='mail--smile' whileHover={{rotateZ:'90deg'}}>{`:))`}</motion.p>
            <p className='mail--contact'>gmail me at {contact.gmail}</p>
            <form onSubmit={handelSubmit}>
                <input type='text' placeholder='name' value={name} name='name' onChange={(e)=>{setname(e.target.value)}} required className='input'/>
                <textarea type='text' placeholder='message' value={msg} name='msg' onChange={(e)=>{setMsg(e.target.value)}} required rows='3' cols='19' className='input'/>
                <motion.button type='submit' whileHover={{backgroundColor: '#a4c3b2'}}>send...</motion.button>
            </form>
        </div>
    )
}