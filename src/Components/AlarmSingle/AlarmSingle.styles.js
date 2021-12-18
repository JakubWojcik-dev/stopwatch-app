import styled from "styled-components";

export const Center = styled.div`
height: 400px;
width:400px;
border: 4px solid #006F80;
border-radius: 200px;
color: #006F80;

text-align: center;
margin-left: 40px;

p{
		
	font-size: 54px;
	font-weight: 900;
	letter-spacing: 3px;
	margin-top: 10px;
	text-align: center;
}	

h5{
	margin-top: 50px;
	display: wrap;
	font-size: 24px;
	font-weight: 700;
	line-height:0;
}
h6{
	font-size: 18px;
	margin-bot: 300px;
	line-height:0;
	
}
div{
display: flex;
justify-content: center;
	
}
`
export const Switch = styled.input`

position: absolute;
left: -999px;
top: -999px;

&:checked + span{
	background-color: #006F80;

	&:before{
		left: calc(100% - 2px);
		transform: translateX(-100%);
	}
}

`
export const ClockDiv = styled.div`

	width: 100px;
	height: 100px;
	border-radius: 10px;
	background-color: #006F80;
	color: #F8F8F8;
	
	p{
		
		font-size: 54px;
		font-weight: 900;
		letter-spacing: 3px;
		margin-top: 10px;
		text-align: center;
	}	
		
		


`
export const InputWrapper = styled.label`

position: relative;

left: 150px;
bottom: -20px;

`
export const Span = styled.span`

display: flex;
cursor:pointer;
width: 100px;
height: 40px;
border-radius: 100px;
background-color:#E8E8E8;
border: 2px solid #006F80;
position: relative;
transition: background-color: 2s;

&:before{
	content: '';
	position: absolute;
	left: 2px;
	top: 2px;
	width: 35px;
	height: 35px;
	border-radius: 45px;
	transition: 0.4s;
	background-color: #fff;
}
&:active:before{
	width: 35px;
}

`

export const Alert = styled.div`

padding: 3px 3px;
border: 3px solid white;
position: fixed;
width: 800px;
height: 80px;
font-size: 30px;
letter-spacing: 2px;

color:white;
background-color:#006F80;
bottom: 30px;
left: 27vmax;
text-align: center;

`
export const Button = styled.button`

position: relative;
bottom: 20px;
    width: 140px;
    height: 40px;
    margin: 2px;
  appearance: none;
 
  background-color: #006F80;
  border-radius: 4px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
 
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 24px;
	font-weight: 800;
	letter-spacing: 2px;
  line-height: 0.75;
  outline: none;
  
  padding: 13px 20px;
  
  text-align: center;
  text-decoration: none;
 
  


  &:hover {
  
  opacity: 0.9;
  transform: translateY(0);
  transition-duration: .35s;
  
}

`