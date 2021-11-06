import styled from "styled-components";

export const Center = styled.div`
margin: auto;
margin-top: 20px;
width: 75%;
text-align: center;

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