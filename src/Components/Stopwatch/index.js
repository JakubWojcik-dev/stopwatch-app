import React, {useState,} from 'react'
import { Center, Div, Flex,Button } from '../Stopwatch/stopwatch.styles'


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
        console.log('tete')
        return setTime({ms: mili, s: sec, m: min, h: hours})
    }
   console.log('tete')
    return (
       
            <Center>
                <h1>Stopwatch</h1>
                <Div> 
                    <Flex>
                        <div><p> {(time.h >= 10) ? time.h : '0' + time.h}</p><h3>hour</h3></div>
                        <div><p> {(time.m >= 10) ? time.m : '0' + time.m}</p><h3>min</h3></div>
                        <div><p> {(time.s >= 10) ? time.s : '0' + time.s}</p><h3>sec</h3></div>
                        <div><p> {(time.ms >= 10) ? time.ms : '0' + time.ms}</p><h3>mili</h3></div> 
                    </Flex>
                </Div>
                
                    {(control)?
                    <Button onClick={run}>Start</Button>
                :
                <div>
                    <Button onClick={clear}>Restart</Button>
                    <Button onClick={stop}>Stop</Button>
                   
                </div>
                }
                    
            </Center>
       
              
    )   
}

export default Stopwatch