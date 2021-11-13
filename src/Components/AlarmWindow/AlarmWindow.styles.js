import styled from "styled-components";

export const HideDiv = styled.div`

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;

`
export const ReleaseOnClick = styled.div`

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8)

`
export const MainDiv = styled.div`
position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 2.5;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-height: 300px;
    min-height: 150px;
    max-width: 800px;
    min-width: 300px;
    
`
export const Button1 = styled.button`

position: absolute;
top: 10px;
right: 10px;
padding: 5px 7px;
background-color: #006F80;
color: white;
border: 3px solid #117E91;

&:hover{

    border: 3px solid #228F91;
    background-color: #117E91;  
}
`
export const Button2 = styled.button`

position: absolute;
top: 79%;
left: 36%;
padding: 5px 7px;
color: white;
border: 3px solid #117E91;
background-color: #006F80;
width: 100px;

&:hover{

    border: 3px solid #228F91;
    background-color: #117E91;  
}
`
export const DivFlex = styled.div`
display: flex;
justify-content: center;

`
export const Input = styled.div`
cursor: pointer;
pointer-events: none;
width:45px;
height: 45px;
text-align: center;
letter-spacing:1px;
color: white;
background-color:#006F80;
border-radius: 3px;
margin-bottom: 10px;
 

::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }
`
export const Div = styled.div`
width:50px;
height: 170px;

img{
    cursor: pointer;
}
position: wrap;
`
