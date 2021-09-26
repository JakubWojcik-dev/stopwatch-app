import React, {useState,useEffect} from 'react'
import { Center, Div } from '../Stopwatch/stopwatch.styles'


const Stopwatch = () => {
    const [time, setTime] = useState({ms:0,s:0,m:0,h:0})
    const [active,setActive] = useState(true)
    const [control,setControl] = useState(true)
    const [timer,setTimer] = useState()
    let mili = time.ms, sec = time.s, min = time.m, hours = time.h

    const clear = () => {
       
        setControl(true)
        changeValue()
        clearInterval(timer)
       setTime({ms:0,s:0,m:0,h:0})
       
    }

    const stop = () => {
        setActive(false)
        setControl(true)
        //changeValue()
        clearInterval(timer)
       
    }

    const run = () => {
        setControl(false)
        //changeValue()
        
        setTimer(setInterval(changeValue, 10))
        
    }

    const changeValue = () => {
          
        if(min === 60)
        {
            hours++
            min = 0
        }
        if(sec === 60)
        {
            min++
            sec = 0
        }
        if(mili === 100)
        {
            sec++
            mili = 0
        }
        mili++
        
        return setTime({ms: mili, s: sec, m: min, h: hours})
    }
   console.log('tete')
    return (
       
            <Center>
                <h1>Stopwatch</h1>
                <Div> 

                    <p> {(time.h >= 10) ? time.h : '0' + time.h}<sub>hours</sub></p>
                    <p> {(time.m >= 10) ? time.m : '0' + time.m}<sub>min</sub></p>
                    <p> {(time.s >= 10) ? time.s : '0' + time.s}<sub>sec</sub></p>
                    <p> {(time.ms >= 10) ? time.ms : '0' + time.ms}<sub>mili</sub></p>   
        
                </Div>
                
                    {(control)?
                    <button onClick={run}>Start</button>
                :
                <div>
                    <button onClick={clear}>Restart</button>
                    <button onClick={stop}>Stop</button>
                   
                </div>
                }
                    
            </Center>
       
              
    )   
}

export default Stopwatch