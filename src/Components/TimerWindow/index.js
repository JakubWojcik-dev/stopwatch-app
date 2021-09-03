import React from 'react'
import { HideDiv, MainDiv, ReleaseOnClick,Button1,Button2,DivFlex } from './timerWindow.styles'

const Window = ({item}) =>{

    return(
    <HideDiv>
       <ReleaseOnClick onClick={item}/> 
    <MainDiv>
       <DivFlex>
           <button>
               img
               
           </button>
        <input type='number' placeholder='hours'name='hours'min='0' max='24'inputMode='none'/>
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