import React, {useState,useEffect} from 'react'
import SingleClock from '../TimerSingle'
import { Div, Grid } from './timer.styles'
import Window from '../TimerWindow'

const Timer = () => {
    const [name,setName] = useState('tatata')
    const [empty,setEmpty] = useState(true)
    const [open,SetOpen] = useState(false)
    const [state, setState] = useState([])  

    const stateClock = () => {
        SetOpen(!open)
        console.log('test')
        
        console.log(empty)
        console.log(open)
        console.log(state)
    }
   const exit = () => {
       SetOpen(!open)
       state.length === 0  ? setEmpty(true) : setEmpty(false)
       
       
   }
    
   const addTimer = () =>{
      
        SetOpen(!open)
        setState([...state,[name,14]])
        
        //console.log(state)
    }

       if(!empty) {
        return (
           <Div>
              
               
               <button className="corner" onClick={addTimer}>dodaj Timer</button>
               
               {open && <Window item={exit} addNew={stateClock}/>}
               
            <Grid>
               {state.map( (item,index) => {
              return <SingleClock>test</SingleClock>
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
                {open && <Window item={exit} addNew={stateClock}/>} 
            </Div>
        )
       }
    
}

export default Timer