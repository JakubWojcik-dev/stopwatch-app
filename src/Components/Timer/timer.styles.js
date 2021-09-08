import styled from "styled-components";


export const Input = styled.input`
border: none;

color: red;
`;

export const Div = styled.div`
text-align: center;
justify-content: center;

.corner{
    
    position: fixed;
    right: 5px;
    bottom: 15px;
    //width: 10vw;
    //height: 5vh;
    font-size: calc(2px + 1vmax);
}

`

export const NewTimer = styled.div`

with: 50%;
height:200px;
background-color: red;
`

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
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;

`
export const Button = styled.button`

position: absolute;
top: 10px;
right: 10px;
padding: 5px 7px;

`
export const Grid = styled.div`

place-items: center;
width: 35%;
margin-left:auto;
margin-right: auto;
display: grid; 
  //grid-auto-flow: row dense; 
  grid-template-columns: 1fr 1fr ; 
  grid-template-rows: auto; 
  gap: 100px 100px; 
 
`