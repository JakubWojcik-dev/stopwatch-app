import styled from "styled-components";

export const Center = styled.div`
height: 400px;
width:400px;
border: 4px solid #006F80;
border-radius: 200px;
//display: flex;
color: #006F80;

text-align: center;
margin-left: 40px;

p{
	display: flex;
	font-size: 64px;
	font-weight: 900;
	letter-spacing: 3px;
	margin-left:87px;
	tetxt-align: center;
	
	div{
		width: 100px;
		height: 100px;
		border-radius: 10px;
		background-color: #006F80;
		color: #F8F8F8;
		text-align: center;
		
	}
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
	margin-bottom: 0px;
	height:30px;
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

export const InputWrapper = styled.label`

position: relative;

top: 0px;
left: 150px;
//left-min: 30vmin;

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
	//box-shadow: 0 2px 4px 0 rgba(0,35,11,0.2);
}
&:active:before{
	width: 35px;
}

`

