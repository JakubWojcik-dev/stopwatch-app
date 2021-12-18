import React, {useEffect, useState,} from 'react'
import { Center, Div, Flex,Button,P, LeftSize } from '../Stopwatch/stopwatch.styles'


const Stopwatch = () => {
    const [time, setTime] = useState({ms:0,s:0,m:0,h:0})
    const [count,setCount] = useState(1)
    const [control,setControl] = useState(true)
    const [timer,setTimer] = useState()
    const [array, setArray] =useState([])
    
    let mili = time.ms, sec = time.s, min = time.m, hours = time.h

    const clear = () => {
       
        setControl(true)
        changeValue()
        clearInterval(timer)
       setTime({ms:0,s:0,m:0,h:0})
       setArray([])
       setCount(1)
    }

    const stop = () => {
        
        setControl(true)
        clearInterval(timer)
       
    }

    const save = () => {
        const singleValue = {hour: time.h, min: time.m, sec: time.s, mil: time.ms,number: count}
        setArray([...array,singleValue])
       setCount(count+1)
    }

    

    const run = () => {
        setControl(false)
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
                    <Button onClick={save}>save</Button>
                </div> 

                }
                <LeftSize>
                {array.map( (item) => {
                   
                   
                   return <h2 key={item.id}>
                            
                    Time {item.number}:  {(item.hour >= 10) ?item.hour : '0' + item.hour}:
                       {(item.min >= 10) ?item.min : '0' + item.min}:
                       {(item.sec >= 10) ?item.sec : '0' + item.sec}:
                       {(item.mil >= 10) ?item.mil : '0' + item.mil} 
                       <hr></hr>
                       </h2>
                    
                })}
                 </LeftSize>   
            </Center>
       
              
    )   
}

export default Stopwatch