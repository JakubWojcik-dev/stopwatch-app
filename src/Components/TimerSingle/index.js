import React from 'react'
import { Div, Count, Flex,BtnContainer,Button } from './TimerSingle.styles'
export const SingleClock = ({startCount, deleteTimer,id ,isActive, editTimer,min,second,hour}) =>{

    return (
        
        <Div>
            
            
            <Flex>
           <Count>{hour < 10 ? '0' + hour : hour}</Count>
           <Count>{min < 10 ? '0' + min : min}</Count>
           <Count>{second < 10 ? '0' + second : second}</Count>
           </Flex>
           <BtnContainer>
           <Button onClick={() => deleteTimer(id)} >Delete</Button>
           <Button onClick={() => editTimer(id)} >Edit</Button>
           <Button onClick={()=> startCount(id)} >{isActive ? "stop" : "start"}</Button>
           </BtnContainer>
           
        </Div>

    )
}

export default SingleClock
