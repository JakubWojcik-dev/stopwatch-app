import React,{useState} from 'react'
import { HideDiv, MainDiv, ReleaseOnClick,Button1,Button2,DivFlex,Input,Div, } from './timerWindow.styles'
import ArrowDown from '../../double-arrow-bottom.svg'
import ArrowUp from '../../double-arrow-top.svg'

const Window = ({item, addNew,rmvMin,rmvHour,rmvSec,addHour,addMin,addSec,mins,hours,sec,edit,id}) =>{

   
    return(
    <HideDiv>
       <ReleaseOnClick onClick={item}/> 
    <MainDiv>
        
       <DivFlex>
           
           
            <Div >
            <img src={ArrowUp}  onClick={addHour} height='30' width='30'/>
           <Input>{hours < 10 ? '0' + hours : hours}</Input>
            <img src={ArrowDown} onClick={rmvHour} height='30' width='30' />
            </Div>

            <Div >
            <img src={ArrowUp} onClick={addMin} height='30' width='30'/>
           <Input>{mins < 10 ? '0' + mins : mins}</Input>
            <img src={ArrowDown} onClick={rmvMin} height='30' width='30' />
            </Div>

            <Div >
            <img src={ArrowUp} onClick={addSec}height='30' width='30' />
           <Input>{sec < 10 ? '0' + sec : sec}</Input>
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
