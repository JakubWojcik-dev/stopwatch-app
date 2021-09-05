import React from 'react'
import { HideDiv, MainDiv, ReleaseOnClick,Button1,Button2,DivFlex } from './timerWindow.styles'
import ArrowDown from '../../double-arrow-bottom.svg'
import ArrowUp from '../../double-arrow-top.svg'
const Window = ({item}) =>{

    return(
    <HideDiv>
       <ReleaseOnClick onClick={item}/> 
    <MainDiv>
       <DivFlex>
           
            <div width='5' height='5' display='inline-flex'>
            <img src={ArrowUp} onClick={() => console.log("aut")} height='25' width='25' />
            {/*<input type='number' placeholder='hours'name='hours'min='0' max='24'inputMode='none'/>*/}
            <img src={ArrowDown} onClick={() => console.log("aut")} height='30' width='30' />
            </div>
  
           
        
        <input type='number' placeholder='min'  name='min'  min='0' max='60'inputMode='numeric'/>
        <input type='number' placeholder='sec'  name='sec'  min='0' max='60'inputMode='numeric'/>
        </DivFlex>
        <Button1 onClick={item}>CLOSE</Button1>
        <Button2 onClick={item}>ADD</Button2>
        
    </MainDiv>
    </HideDiv>        
    )


}
export default Window