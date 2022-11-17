
import styled from "styled-components";
import { IButtonProps } from "../typings";

export const BodyContainer = styled.body`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #f5f5f5;
max-width: 100%;
min-width: 100%;
min-height: 100%;
max-height: 100%;
`;

export const FormContainer = styled.div`
    max-width: 500px;
    min-width: 300px;
    width: 38%;
    max-height: 600px;
    height: 60%;
    margin:50px auto;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 2rem;
    background-color: #f5f5f5;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    `;

export const FormHeader = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
    padding: 2.3rem 0;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.label`
display: block;
color: #000000;
letter-spacing: 0.1px;
text-align: left;
font-size: 0.825rem;
font-weight: 500;
margin-bottom: 0.3rem;
`;

// export const formContainer = styled.form`
// margin: 0 auto;
// width: 100%;
// max-width: 414px;
// padding: 1.3rem;
// display: flex;
// flex-direction: column;
// position: relative;
// `;

export const Container = styled.div`
  width: auto;
  position: relative;
  margin-bottom: 1.1rem;

  input {
    height: 45px;
    padding: 0 10px;
    border-radius: 4px;
    width: -webkit-fill-available;
    border-width: 1.5px;
    border: 1px solid #676c7b3c;
    background: #f3f5f7;
  }
  @media screen and (max-width: 425px) {   
  input {
    height: 35px;
    padding: 0 5px;
  }
  } 
  `;

export const Span = styled.span`
display: block;
position: relative;
width: 100%;

&::before {
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  position: absolute;
  top: -4px;
  left: -4px;
  border-radius: 2px;
  border: 4px solid transparent;
  transition: border-color 0.3s ease-in;
}
`;

export const ButtonArea = styled.button`
height: ${(props: IButtonProps) => props.height || "38px"};
color: ${(props: IButtonProps) => props.color || "#FFFFFF"};
font-size: 0.75rem;
font-weight: bold;
background: ${(props: IButtonProps) =>
props.background || "#56C7F4"};
border: none;
border-radius: 6px;
width: ${(props: IButtonProps) => props.width || "196px"};
cursor: pointer;

@media screen and (max-width: 425px) {
  margin-top: 0.2rem;
  margin-bottom: 1rem;
}
`;


export const List = styled.ul`
margin: 0;
padding: 0;

li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
`;






