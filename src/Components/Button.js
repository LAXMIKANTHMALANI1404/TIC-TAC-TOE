import './Button.css'
import React from 'react'
const Button=({button,onClick})=>{
    return <button onClick={onClick} >{button}</button>
}
export default Button;