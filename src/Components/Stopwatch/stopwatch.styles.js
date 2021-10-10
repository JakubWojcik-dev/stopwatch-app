import styled from 'styled-components'

export const Center = styled.div`
margin: auto;
margin-top: 20px;
width: 75%;
text-align: center;

height:auto;
min-height:80vh;
background-color: #F8F8F8;
border: 3px solid #A0A0A0;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 
0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

h1{
    letter-spacing: 7px;
    font-size: calc(15px + 2vmax);
    font-family: 'Oxygen';
}
p{
    font-size: calc(15px + 2vmax);
}
sub{
    font-size: calc(1px + 2vmax);
}
`
export const Div = styled.div`
display: flex;

justify-content: center;

`
export const Flex = styled.div`

width: 500px;
display: flex;
align-items: top;
justify-content: space-between;

p{
    
    text-align: center;
    color: white;
    height: 50px;
    margin-bottom: 0;
    margin-top: 0;
}

div{
    background-color: #006F80;
    border-radius: 25px;
    text-align: center;
    width: 100px;
   height: 100px;
   margin: 0px;
}
h3{
    margin-top: 10px;
    color: white;
    
    
}
`
export const Button = styled.button`

    margin: 30px 15px;
  appearance: none;
  backface-visibility: hidden;
  background-color: #006F80;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
 
  


Button:hover {
  background-color: #1e8449;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}



`
export const P = styled.p`

font-size: 10px;
`
export const LeftSize = styled.div`

margin-top: 20px;
text-align:left;
width:75%;
height:auto;

h2{
    margin: 25px 20px;
    color: #006F80;
    letter-spacing: 2px;
}
hr{
    size= 10px; 
    width=99%; 
    color=#006F80;
}
`