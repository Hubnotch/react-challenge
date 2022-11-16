import { ReactNode } from "react";

export interface IInputProps {
    name: string;
    label?: string;
    autoComplete:string
    value?: number | string;
    placeholder?: string;
    type?: string;
    max?: number | string;
    disabled?: boolean;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButton {
    title: string;
}

export interface IButtonProps {
    background?: string;
    color?: string;
    height?: string;
    children: ReactNode;
    width?: string;
    style?: any;
    onclick?: () => void;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
  }
  
  export interface ITodoStore {
    id:number;
    title: string;
    completed: boolean;
  }