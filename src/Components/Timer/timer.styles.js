import styled from "styled-components";


export const Input = styled.input`
border: none;

color: red;
`;

export const Div = styled.div`
text-align: center;
justify-content: center;
padding-top: 2vmax;

.corner{
    
    position: fixed;
    right: 5px;
    bottom: 15px;
    font-size: calc(4px + 1vmax);
    &:hover {
      right: 7px;
    bottom: 16px;
      font-size: calc(6px + 1vmax);
      opacity: 0.9;
    } 
}
h1{
  letter-spacing: 2px;
  font-familly

  
}
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

export const Grid = styled.div`

place-items: center;
width: 35%;
margin-left:auto;
margin-right: auto;
display: grid; 
  grid-template-columns: 1fr 1fr ; 
  grid-template-rows: auto; 
  gap: 100px 100px;
   

  @media (max-width: 976px) {
    grid-template-columns: 1fr ;
    gap: 50px;
  }
 
`
export const Button = styled.button`


	border: 2px solid #117E91;
	background-color: #006F80;
	font-size: 16px;
	height: 2.5em;
	width: 2.5em;
	border-radius: 999px;
	position: relative;
  margin-right: 10px;
	cursor: pointer;
	&:after,
	&:before {
		content: "";
		display: block;
		background-color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	&:before {
		height: 1em;
		width: 0.2em;
	}

	&:after {
		height: 0.2em;
		width: 1em;
	}
}

`

export const AddButton =styled.button`

background-color: #006F80;
  border-radius: 40px;
  cursor: pointer;
  box-sizing: border-box;
  color: #eee;
  
  height: 50px;
  font-size: 1.4em;
  padding: 4px;
  
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

&:hover {
  color: white;
  background-color:#008F90;
}

&:span {
  align-items: center;
  background: #0e0e10;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

&1:hover &:span {
  background: transparent;
`