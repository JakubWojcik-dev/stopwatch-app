import React, {useState,useEffect} from 'react'
import { Input, NewTimer, HideDiv,ReleaseOnClick,MainDiv, Button } from './timer.styles'
import { Div } from './timer.styles'
import Window from '../TimerWindow'
const Timer = () => {
    const [name,setName] = useState('')
    const [empty,setEmpty] = useState(false)
    const [open,SetOpen] = useState(false)
    const [state, setState] = useState([])  

   const exit = () => {
       SetOpen(!open)
       state.length === 0 ? setEmpty(true)
       : setEmpty(false)
       
   }
    
   const addTimer = () =>{
      
        SetOpen(!open)
        setState([...state,4])
        
        //console.log(state)
    }
       if(!empty) {
        return (
           <Div>
               <h3>dodaj Timer</h3>
               <button onClick={exit}>{state}</button>
               
               {state.map( (item,index) => {
               
              return <h5 key={index}>{item}</h5>
            })}
            {open && <Window item={addTimer}/>} 
           </Div>
           
        )
       }
        
       else{
        return (
            <Div>
                <h1>Brak Timerów!!! Kliknij poniższy przycisk żeby dodać timer</h1>
                <button onClick={addTimer}>Nowy Timer</button>
                {open && <Window item={addTimer}/>} 
            </Div>
        )
       }
    
}

export default Timer