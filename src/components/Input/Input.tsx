import React from 'react'
import { Container, Label, Span } from '../../styles/styles'
import { IInputProps } from '../../typings'

function Input(props:IInputProps) {
  const {
    name,
    label,
    value,
    placeholder,
    type,
    max,
    onChange,
    disabled,
    required,
    autoComplete
  } = props;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Span>
      <input
          style={{ fontSize: "1rem" }}
          name={name}
          value={value}
          max={max}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
        />
      </Span>
    </Container>
  )
}

export default Input
