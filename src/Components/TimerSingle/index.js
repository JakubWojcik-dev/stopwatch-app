import React from 'react'
import { Div, Count, Flex,BtnContainer,Button, SoloButton } from './TimerSingle.styles'
export const SingleClock = ({startCount, deleteTimer,id ,isActive, editTimer,min,second,hour}) =>{

    return (
        
        <Div>
            
            
            <Flex>
           <Count>{hour < 10 ? '0' + hour : hour}</Count>
           <Count>{min < 10 ? '0' + min : min}</Count>
           <Count>{second < 10 ? '0' + second : second}</Count>
           </Flex>
           
           {isActive ? 
           <SoloButton onClick={()=> startCount(id)} >Stop</SoloButton>
            : 
            <BtnContainer>
           <Button onClick={() => deleteTimer(id)} >Delete  </Button>
           <Button onClick={() => editTimer(id)} >Edit</Button>
           <Button onClick={()=> startCount(id)} >Start</Button>
           </BtnContainer>
           }
          
           
           
        </Div>

    )
}

export default SingleClock
