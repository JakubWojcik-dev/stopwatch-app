import styled from "styled-components";

export const Div = styled.div`


width: 250px;
height: 250px;
//background-color: #f1f1f1;
background-color: #E8E8E8;
border-radius: 20px;
border: 3px solid gray;


`
export const Flex = styled.div`
display: flex;
margin-top:20px;
justify-content: space-around;
align-items: center;
width: 250px;
height: 60px;
font-size: 2.5em;
color: white;
`
export const Count = styled.div`

background-color: #006F80;
width: 60px;
height: 60px;

border-radius: 5px;
border: 3px solid #006F80;



`
export const BtnContainer = styled.div`
display: flex;
justify-content: space-around;
width:250px;
height:auto;
text-align: center;
margin-top: 20px;

`
export const Button = styled.button`

    width: 70px;
    height: 35px;
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
  font-size: 12px;
  font-weight: 600;
  letter-spacing:1px;
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
export const SoloButton = styled.button`

width: 100px;
height: 35px;
margin: 2px;
margin-top: 20px;
appearance: none;

background-color: #006F80;
border-radius: 4px;
border-style: none;
box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
box-sizing: border-box;
color: #fff;
cursor: pointer;

font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
font-size: 18px;
font-weight: 700;
letter-spacing: 2px;
line-height: 0.5;
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

