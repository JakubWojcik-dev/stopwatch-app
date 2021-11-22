import styled from "styled-components";

export const Center = styled.div`
margin: auto;
margin-top: 20px;
width: 75%;
min-width: 500px;
text-align: center;
.corner{
    
    position: fixed;
    right: 5px;
    bottom: 15px;
    //width: 10vw;
    //height: 5vh;
    font-size: calc(4px + 1vmax);
    &:hover {
      right: 7px;
    bottom: 16px;
      font-size: calc(6px + 1vmax);
      opacity: 0.9;
    } 
}


height:auto;
min-height:80vh;
background-color: #F8F8F8;
border: 3px solid #006F80;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 
0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

h1{
    letter-spacing: 7px;
    font-size: calc(15px + 2vmax);
    font-family: 'Oxygen';
    margin-bottom: 35px;
}
p{
    font-size: calc(15px + 2vmax);
}
sub{
    font-size: calc(1px + 2vmax);
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

/////////////////////////////////////////////////
export const Grid = styled.div`

place-items: center;
//width: 30%;
margin-left:auto;
margin-right: auto;
display: grid; 
  //grid-auto-flow: row dense; 
  grid-template-columns: 1fr 1fr ; 
  grid-template-rows: auto; 
  gap: 80px 80px;
   

  @media (max-width: 576px) {
    grid-template-columns: 1fr ;
    gap: 40px;
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