import React, {useState,useEffect} from 'react'
import SingleClock from '../TimerSingle'
import { Div, Grid } from './timer.styles'
import Window from '../TimerWindow'
const Timer = () => {
    const [name,setName] = useState('tatata')
    const [empty,setEmpty] = useState(true)
    const [open,SetOpen] = useState(false)
    const [state, setState] = useState([])
    
    const [hours, setHours] = useState(0)
    const [mins, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const stateClock = () => {
        SetOpen(!open)
        const NewTimer = { id: new Date().getTime().toString(), title: name,s:sec, h: hours,m: mins };
        setState([...state,NewTimer])
        state.length === '0'  ? setEmpty(true) : setEmpty(false)
       
    }
   const exit = () => {
       SetOpen(!open)
       state.length === 0  ? setEmpty(true) : setEmpty(false)
       
       
   }
    
   const addTimer = () =>{
   
        SetOpen(!open)
        setHours(0)
        setMin(0)
        setSec(0)
        
        console.log(state)
    }

    const addHour = () => {
        
        if(hours > 23){
            setHours(0)
        }else{ 
            setHours(hours + 1)
        }
           
    }

    const rmvHour = () => {
       
        if(hours < 1){
            setHours(24)
        }else{
            setHours(hours - 1)
        }
    }

    const addMin = () => {
        if(mins > 59){
            setMin(0)
        }else{ 
            setMin(mins + 1)
        }
       
        
    }

    const rmvMin = () => {
       
        if(mins < 1){
            setMin(60)
        }else{
            setMin(mins - 1)
        }
    }

    const addSec = () => {
        if(sec > 59){
            setSec(0)
        }else{ 
            setSec(sec + 1)
        }
       
        
    }

    const rmvSec = () => {
       
        if(sec < 1){
            setSec(60)
        }else{
            setSec(sec - 1)
        }
    }

    const deleteTimer = (id) => {

        setState(state.filter((item) => item.id !== id));
        
    }
    

       if(!empty) {
        return (
           <Div>
              
               
               <button className="corner" onClick={addTimer}>dodaj Timer</button>
               
               {open && <Window item={exit} addNew={stateClock} addHour={addHour}
                addMin={addMin} addSec={addSec} rmvHour={rmvHour} rmvMin={rmvMin} rmvSec={rmvSec}
                mins={mins} hours={hours} sec={sec}/>} 
               
            <Grid>
               {state.map( (item) => {
                   const { id } = item
                   
              return <SingleClock key={item.id} id={id} min={item.m} hour={item.h} second={item.s} deleteTimer={deleteTimer} 
             ></SingleClock>
            })}
            </Grid>
           </Div>
           
        )
       }
        
       else{
        return (
            <Div>
                <h1>Brak Timerów!!! Kliknij poniższy przycisk żeby dodać timer</h1>
                <button onClick={addTimer}>Nowy Timer</button>
                {open && <Window item={exit} addNew={stateClock} addHour={addHour}
                addMin={addMin} addSec={addSec} rmvHour={rmvHour} rmvMin={rmvMin} rmvSec={rmvSec}
                mins={mins} hours={hours} sec={sec}/>} 
            </Div>
        )
       }
    
}

export default Timer

