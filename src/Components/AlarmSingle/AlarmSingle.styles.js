import styled from "styled-components";

export const Center = styled.div`
height: 400px;
width:400px;
border: 4px solid #006F80;
border-radius: 200px;
display: flex;
color: #006F80;

align-items:center;
margin-left: 40px;

p{
	font-size: 50px;
	font-weight: 900;
	letter-spacing: 3px;
	margin-left:10px;
}

h5{
	font-size: 16px;
	font-weight: 700;
	line-height:0;
}
h6{
	font-size: 12px;
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

//position: relative;

//top: 15px;
//left: 80%;
//left-min: 30vmin;

`
export const Span = styled.span`

display: flex;
cursor:pointer;
width: 50px;
height: 25px;
border-radius: 100px;
background-color:#E8E8E8;
border: 2px solid #006F80;
position: relative;
transition: background-color: 0.4s;

&:before{
	content: '';
	position: absolute;
	left: 2px;
	top: 2px;
	width: 21px;
	height: 21px;
	border-radius: 45px;
	transition: 0.4s;
	background-color: #fff;
	//box-shadow: 0 2px 4px 0 rgba(0,35,11,0.2);
}
&:active:before{
	width: 35px;
}

`
