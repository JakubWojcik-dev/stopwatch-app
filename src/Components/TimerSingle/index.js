import React from 'react'
import { Div, Count, Flex,BtnContainer } from './TimerSingle.styles'
export const SingleClock = ({Start, Delete, Edit}) =>{

    return (

        <Div>
            <h3>Name of timer</h3>
            <Flex>
           <Count>00</Count>:
           <Count>00</Count>:
           <Count>00</Count>
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