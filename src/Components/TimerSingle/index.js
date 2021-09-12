import React from 'react'
import { Div, Count, Flex,BtnContainer } from './TimerSingle.styles'
export const SingleClock = ({Start, Delete, Edit,min,second,hour}) =>{

    return (

        <Div>
            <h3>Name of timer</h3>
            <Flex>
           <Count>{hour}</Count>:
           <Count>{min}</Count>:
           <Count>{second}</Count>
           </Flex>
           <BtnContainer>
           <button onClick={Delete} >Delete</button>
           <button onClick={Edit} >Edit</button>
           <button onClick={Start} >Start</button>
           </BtnContainer>
        </Div>

    )
}

export default SingleClock