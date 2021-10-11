import React,{useState} from 'react'
import { HideDiv, MainDiv, ReleaseOnClick,Button1,Button2,DivFlex,Input,Div, } from './timerWindow.styles'
import ArrowDown from '../../double-arrow-bottom.svg'
import ArrowUp from '../../double-arrow-top.svg'

const Window = ({item,name, addNew,rmvMin,rmvHour,rmvSec,addHour,addMin,addSec,mins,hours,sec,edit,id}) =>{

   
    return(
    <HideDiv>
       <ReleaseOnClick onClick={item}/> 
    <MainDiv>
        
       <DivFlex>
           
           
            <Div >
            <img src={ArrowUp}  onClick={addHour} height='30' width='30'/>
           <Input type='number' placeholder={hours === 0 ? 'hours' : hours} name='hours'/>
            <img src={ArrowDown} onClick={rmvHour} height='30' width='30' />
            </Div>

            <Div >
            <img src={ArrowUp} onClick={addMin} height='30' width='30'/>
           <Input type='number' placeholder={mins === 0 ? 'min' : mins} name='min'/>
            <img src={ArrowDown} onClick={rmvMin} height='30' width='30' />
            </Div>

            <Div >
            <img src={ArrowUp} onClick={addSec}height='30' width='30' />
           <Input type='number' placeholder={sec === 0 ? 'sec' : sec} name='sec'/>
            <img src={ArrowDown} onClick={rmvSec} height='30' width='30'/>
            </Div>
  
           
        
        
        </DivFlex>
        <Button1 onClick={item}>CLOSE</Button1>
        <Button2 onClick={()=>addNew(id)}>{edit ? 'SAVE' : 'ADD'}</Button2>
        
    </MainDiv>
    </HideDiv>        
    )


}
export default Window
