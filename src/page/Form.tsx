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
              <Button title="Login"/>
    </form>
  )
}

export default Form