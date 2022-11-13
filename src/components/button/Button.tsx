import React from 'react'
import { IButton } from '../../typings'
import "../../styles/form.css";
const  Button =(props:IButton):JSX.Element =>{
  return (
    <div className="row">
    <button>{props.title}</button>
    </div>
  )
}

export default Button