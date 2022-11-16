formcomponent
import React from 'react'
import Button from '../components/button/Button'
import FormInput from '../components/input/FormInput'
import "../styles/form.css";
function Form(props: any): JSX.Element {
  return (
    <form className='loginForm'>
        <h1 className='headerTitle'>Rapptr Labs</h1>
        <FormInput 
              name="email"
              for="email"
              label="Email"
              type="email"
              placeholder="testRapttrLabs.com"
              onChange={props.onChange} value={''}/>
        <FormInput 
              name="password"
              for="password"
              label="Password"
              type="password"
              placeholder="Must be at least 4 characters"
              onChange={props.onChange} value={''}/>
        <Button title={'Login'}>
    </form>
  )
}
export default Form


Button componnt
import React from 'react'
import { IButton } from '../../typings'
import { Button } from '../../styles/styles'

const  Button =(props:IButton):JSX.Element =>{
  return (
   <Button title={''}>{props.title}</Button>
  )
}

export default Button

input component
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


