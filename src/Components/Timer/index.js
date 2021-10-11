import React, {useState,useEffect} from 'react'
import SingleClock from '../TimerSingle'
import { Div, Grid, Button } from './timer.styles'
import Window from '../TimerWindow'

const Timer = () => {

    const [empty,setEmpty] = useState(true)
    const [open,setOpen] = useState(false)
    const [state, setState] = useState([])

    const [editing, setEditing] = useState(false)
    const [hours, setHours] = useState(0)
    const [mins, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [idItem, setIdItem] = useState('')
    const [timer,setTimer] = useState()
    const [test,setTest] = useState(false)

    const stateClock = () => {
        setOpen(!open)
        
        
        const NewTimer = { id: new Date().getTime().toString(), s:sec, h: hours, m: mins };
        setState([...state,NewTimer])
        console.log(state)
        state.length === '0'  ? setEmpty(true) : setEmpty(false)
        
    }
   const exit = () => {
       setOpen(!open)
       state.length === 0  ? setEmpty(true) : setEmpty(false)
       
       
   }
    
   const addTimer = () =>{
    
        setOpen(!open)
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

    const editTimer= (id) => {
        const specificItem = state.find((item) => item.id === id)
        setOpen(true)
        setEditing(true)
        console.log(id)
        setIdItem(id)
        console.log(specificItem)
        setHours(specificItem.h)
        setMin(specificItem.m)
        setSec(specificItem.s)
        
        console.log(idItem)
      };
      
      const saveChanges = (id) => {
        const specificItem = state.find((item) => item.id === id)
        setOpen(false)
        setEditing(false)
        specificItem.s = sec
        specificItem.m = mins
        specificItem.h = hours
    
      }

      const countDown = (id) => {
    
        setTest(!test)
        console.log(test)
       
            setTimer(setInterval(() => {
              
               changeValue(id)
            }, 1000))
       
      
      }

      const changeValue = (id) => {
        const specificItem = state.find((item) => item.id === id)
        console.log(specificItem)
      
        if( specificItem.m === 0 && specificItem.h > 0)
        {
            specificItem.h--
            specificItem.m = 60
           
        }
        if(specificItem.s === 0 && specificItem.m > 0)
        {
            specificItem.m--
            specificItem.s = 60
        }
        if(specificItem.s === 0 && specificItem.m === 0 && specificItem.h === 0)
        {
            
            clearInterval(timer)
            return 0
        }
       
        specificItem.s--
        console.log(state)
        setTest(new Date())
        
      }
     

       if(!empty) {
        return (
           <Div>
              
               
               <Button className="corner" onClick={addTimer}></Button>
               
               {open && <Window item={exit} addNew={ editing ? saveChanges : stateClock } id={idItem}  addHour={addHour}
                addMin={addMin} addSec={addSec} rmvHour={rmvHour} rmvMin={rmvMin} rmvSec={rmvSec}
                mins={mins} hours={hours} sec={sec} edit={editing} />} 
            <Grid>
               {state.map( (item) => {
                   const {id}  = item
                   
              return <SingleClock key={item.id}  id={id} min={item.m} hour={item.h} second={item.s} isActive={item.isActive}  deleteTimer={deleteTimer} 
              editTimer={editTimer} startCount={countDown}
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
                {open && <Window item={exit} addNew={ editing ?  saveChanges : stateClock } id={idItem} addHour={addHour}
                addMin={addMin} addSec={addSec} rmvHour={rmvHour} rmvMin={rmvMin} rmvSec={rmvSec}
                mins={mins} hours={hours} sec={sec}/>} 
            </Div>
        )
       }
    
}

export default Timer

