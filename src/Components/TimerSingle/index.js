import React from 'react'
import { Div, Count, Flex,BtnContainer } from './TimerSingle.styles'
export const SingleClock = ({startCount, deleteTimer,id , editTimer,min,second,hour}) =>{

    return (

        <Div>
            <h3>Name of timer</h3>
            <Flex>
           <Count>{hour < 10 ? '0' + hour : hour}</Count>:
           <Count>{min < 10 ? '0' + min : min}</Count>:
           <Count>{second < 10 ? '0' + second : second}</Count>
           </Flex>
           <BtnContainer>
           <button onClick={() => deleteTimer(id)} >Delete</button>
           <button onClick={() => editTimer(id)} >Edit</button>
           <button onClick={()=> startCount(id)} >Start</button>
           </BtnContainer>
        </Div>

    )
}

export default SingleClock
