import React, {useState,useEffect} from 'react'
import { Input } from './timer.styles'
import { Div } from './timer.styles'
const Timer = () => {
    const [name,setName] = useState('')
    const [empty,setEmpty] = useState(true)
    const [open,SetOpen] = useState(false)
    const [state, setState] = useState([])  

   const exit = () => {
       SetOpen(!open)
       
   }
    
    const addTimer = () =>{
      
        SetOpen(!open)
        setState([...state,4])
        
        console.log(state)
    }
       if(empty && open){
        return (
           <Div>
               <h3>dodaj Timer</h3>
               <button onClick={exit}>{state}</button>
               {state.map( (item,index) => {
                
              return <h5 key={index}>{item}</h5>
            })}
           </Div>
           
        )
       }
        else if(empty){
            return (
                <Div>
                <h1>Brak Timerów!!! Kliknij poniższy przycisk żeby dodać timer</h1>
                <button onClick={addTimer}>Nowy Timer</button>
            </Div>
            )
       }
       else{
        return (
            
            <button onClick={addTimer}>Dodaj timer</button>
           
            
        )
       }
    
}

export default Timer