import React, {useState,useEffect} from 'react'
import { Input, NewTimer, HideDiv,ReleaseOnClick,MainDiv, Button } from './timer.styles'
import { Div } from './timer.styles'
import Window from '../TimerWindow'

const Timer = () => {
    const [name,setName] = useState('')
    const [empty,setEmpty] = useState(true)
    const [open,SetOpen] = useState(false)
    const [state, setState] = useState([])  

    const stateClock = () => {
        SetOpen(!open)
        console.log('test')
        
        console.log(empty)
        console.log(open)
        console.log(state.length)
    }
   const exit = () => {
       SetOpen(!open)
       if(state.length === 0)  {setEmpty(true)} else if(state.length > 0) {setEmpty(false)}
       
       
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
               <button onClick={addTimer}>{state}</button>
               
               {state.map( (item,index) => {
               
              return <h5 key={index}>{item}</h5>
            })}
            
           </Div>
           
        )
       }
        
       else{
        return (
            <Div>
                <h1>Brak Timerów!!! Kliknij poniższy przycisk żeby dodać timer</h1>
                <button onClick={addTimer}>Nowy Timer</button>
                {open && <Window item={exit} addNew={stateClock}/>} 
            </Div>
        )
       }
    
}

export default Timer