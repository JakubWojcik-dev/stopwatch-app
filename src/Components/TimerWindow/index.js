import React,{useState} from 'react'
import { HideDiv, MainDiv, ReleaseOnClick,Button1,Button2,DivFlex,Input,Div, } from './timerWindow.styles'
import ArrowDown from '../../double-arrow-bottom.svg'
import ArrowUp from '../../double-arrow-top.svg'

const Window = ({item, addNew}) =>{

    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    
    const addHour = () => {
        if(hours > 23){
            setHours(0)
        }else{ 
            setHours(hours + 1)
        }
       
        
    }
    const rmvHour = () => {
       
        if(hours < 1){
            setHours(24)
        }else{
            setHours(hours - 1)
        }
    }

    const addMin = () => {
        if(min > 59){
            setMin(0)
        }else{ 
            setMin(min + 1)
        }
       
        
    }
    const rmvMin = () => {
       
        if(min < 1){
            setMin(60)
        }else{
            setMin(min - 1)
        }
    }

    const addSec = () => {
        if(sec > 59){
            setSec(0)
        }else{ 
            setSec(sec + 1)
        }
       
        
    }

    const rmvSec = () => {
       
        if(sec < 1){
            setSec(60)
        }else{
            setSec(sec - 1)
        }
    }

    const AddTimerOnStage = () =>{

        return (
            <h2>hello</h2>
        )
    }
    return(
    <HideDiv>
       <ReleaseOnClick onClick={item}/> 
    <MainDiv>
       <DivFlex>
           
           
            <Div >
            <img src={ArrowUp} onClick={addHour} height='30' width='30'/>
           <Input type='number' placeholder={hours === 0 ? 'hours' : hours} name='hours'/>
            <img src={ArrowDown} onClick={rmvHour} height='30' width='30' />
            </Div>

            <Div >
            <img src={ArrowUp} onClick={addMin} height='30' width='30'/>
           <Input type='number' placeholder={min === 0 ? 'min' : min} name='min'/>
            <img src={ArrowDown} onClick={rmvMin} height='30' width='30' />
            </Div>

            <Div >
            <img src={ArrowUp} onClick={addSec}height='30' width='30' />
           <Input type='number' placeholder={sec === 0 ? 'sec' : sec} name='sec'/>
            <img src={ArrowDown} onClick={rmvSec} height='30' width='30'/>
            </Div>
  
           
        
        
        </DivFlex>
        <Button1 onClick={item}>CLOSE</Button1>
        <Button2 onClick={addNew}>ADD</Button2>
        
    </MainDiv>
    </HideDiv>        
    )


}
export default Window