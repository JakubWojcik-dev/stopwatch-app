import React, {useState,useEffect} from 'react'
import { Input } from './timer.styles'
const Timer = () => {

    const [empty,setEmpty] = useState(true)
    const [open,SetOpen] = useState(false)
    const [state, setState] = useState([])  

   const exit = () => {
       SetOpen(!open)
   }
    
    const addTimer = () =>{
        console.log("test")
        SetOpen(!open)
        setState([...state,13])
        console.log(state)
    }
       if(empty && open){
        return (
           <div>
               <h3>dodaj Timer</h3>
               <button onClick={exit}>{state}</button>
               <ul>
               {state.map( (item) => {
                  <li key={item.id}>{state.values}</li>
               })}
            </ul>
           
           </div>
           
        )
       }
        else if(empty){
            return (
                <button onClick={addTimer}>Dodaj timer</button>
            )
       }
       else{
        return (
            <div>
                <h1>Brak Timerów!!!</h1>
                <button onClick={addTimer}>Dodaj timer</button>
            </div>
        )
       }
    
}

export default Timer