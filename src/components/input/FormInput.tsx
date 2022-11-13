import React from 'react'
import { IInput } from '../../typings'
import "../../styles/form.css";
function FormInput(props: IInput): JSX.Element {
  return (
    <div className="row">
      <label htmlFor={props.for}>{props.label}</label>
      <input 
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange} />
    </div>
  )
}

export default FormInput