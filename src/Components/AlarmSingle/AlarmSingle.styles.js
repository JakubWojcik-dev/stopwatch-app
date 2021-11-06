import styled from "styled-components";

export const Center = styled.div`
height: 100px;
width:90%;
border: 2px solid #006F80;
border-radius: 35px;
background-color: #e0fbff;
color: #006F80;
text-align:center;
margin-left: 40px;
`
export const Switch = styled.div`


    
  display: block;
  position: relative;
  padding-left: $toggle-width;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ .control {
    background-color: $toggle-background-color-on;
    
    &:after {
      left: $toggle-width - $toggle-control-size - $toggle-gutter;
    }
  }

  &:control {
    position: absolute;
    top: 0;
    left: 0;
    height: $toggle-height;
    width: $toggle-width;
    border-radius: $toggle-radius;
    background-color: $toggle-background-color-off;
    transition: background-color $toggle-control-speed $toggle-control-ease;

    &:after {
      content: "";
      position: absolute;
      left: $toggle-gutter;
      top: $toggle-gutter;
      width: $toggle-control-size;
      height: $toggle-control-size;
      border-radius: $toggle-radius;
      background: $toggle-control-color;
      transition: left $toggle-control-speed $toggle-control-ease;
    }
  }
}
`