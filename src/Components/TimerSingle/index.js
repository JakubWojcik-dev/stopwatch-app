import React from 'react'
import { Div, Count, Flex,BtnContainer } from './TimerSingle.styles'
export const SingleClock = ({startCount,name, deleteTimer,id ,isActive, editTimer,min,second,hour}) =>{

    return (
        
        <Div>
            
            <h3>{name}</h3>
            <Flex>
           <Count>{hour < 10 ? '0' + hour : hour}</Count>:
           <Count>{min < 10 ? '0' + min : min}</Count>:
           <Count>{second < 10 ? '0' + second : second}</Count>
           </Flex>
           <BtnContainer>
           <button onClick={() => deleteTimer(id)} >Delete</button>
           <button onClick={() => editTimer(id)} >Edit</button>
           <button onClick={()=> startCount(id)} >{isActive ? "stop" : "start"}</button>
           </BtnContainer>
           
        </Div>

    )
}

export default SingleClock
