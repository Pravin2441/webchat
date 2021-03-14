import React from 'react'
import option from './images/option.png'
import send from './images/send.png'

const chatbox = () => {
    return (
        <div className='chatbox'>
              <img src={option} className='footerOption'/>
            <input type='text' placeholder='Type your message here'></input>
             <img src={send} className='send'/>
        </div>
    )
}

export default chatbox
