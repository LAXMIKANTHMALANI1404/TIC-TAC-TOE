import './ButtonBox.css'
import Button from './Button'
import React from 'react'
const ButtonBox=({children})=>{
    
    
       return (
           <div className='buttonbox'>{children}</div>
       )
    }
export default ButtonBox;