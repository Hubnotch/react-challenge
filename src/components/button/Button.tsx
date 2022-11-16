import React from 'react'
import { ButtonArea } from '../../styles/styles'
import { IButtonProps } from '../../typings';


function Button({ 
  background,
  color,
  height,
  children,
  width,
  onclick,
  disabled,
  ...props}:IButtonProps) {
    return (
      <ButtonArea
        background={background}
        color={color}
        height={height}
        width={width}
        disabled={disabled}
        onClick={onclick}
        {...props}
      >
        {children}
      </ButtonArea>
    );
}

export default Button
