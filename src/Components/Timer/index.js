import React, {useState,useEffect} from 'react'
import { Center } from './content.styles'
import { Div } from './content.styles'

const Timer = ({mili, sec, min,hours}) => {

    const [state, setstate] = useState(0)
    const changeValue = () => {
       setstate(state + 1) 
       console.log("raz") 
     return  <p>{state} raz</p>
    }
    useEffect(()=>{
       
        document.title = `Kliknięto ${state} razy`
        console.log("raz")
        
    })
    
    return (
       <section>
        <Center>
            <h1>Timer</h1>
            <Div>
                <p> {state}<sub>mili</sub></p>
                <p> {sec} <sub>sec</sub></p>
                <p> {min}<sub>min</sub></p>
                <p> {hours}<sub>hours</sub></p>
            </Div>
            <button onClick={changeValue}>btn</button>    
        </Center>
       
        </section>
        
    )

    
}

export default Timer