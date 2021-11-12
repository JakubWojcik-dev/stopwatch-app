import styled from "styled-components";

export const Center = styled.div`
height: 100px;
width:50%;
border: 4px solid #006F80;
border-radius: 35px;

color: #006F80;
text-align:center;
margin-left: 40px;
`
export const Switch = styled.button`




	display: flex;
	width: 100px;
	height: 50px;
	border: 6px solid;
	border-radius: 99em;
	position: relative;
	transition: transform .75s ease-in-out;
	transform-origin: 50% 50%;
	cursor: pointer;
	
  .clicked{
    transform: translateX(45px);
    background-color: #red;
  }
  &:after {
    transform: translateX(45px);
    background-color: #FFF;
  }
	&:before {
		transition: transform .75s ease;
		transition-delay: .5s;
		content: "";
		display: block;
		position: absolute;
		width: 36px;
		height: 36px;
		background-color: #000;
		border-radius: 50%;
		//top: 6px;
		//left: 6px;
	}
`