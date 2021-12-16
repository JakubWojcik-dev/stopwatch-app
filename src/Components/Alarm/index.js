import React,{createContext, useEffect, useReducer} from "react";
import { useState } from "react/cjs/react.development";
import { Center,Button, Grid } from "./alarm.styles";
import SingleAlarm from "../AlarmSingle";
import AlarmWindow from "../AlarmWindow";
import { render } from "@testing-library/react";

export const DataContext = createContext()
const Alarm = () => {

    const [playing, setPlaying] = useState(false)
    const [open, setOpen] = useState(false)
    const[data,setData] = useState([])
    const [hour, setHour] =useState(0)
    const [min, setMin] =useState(0)
    const [local,setState] = useState(localStorage.getItem('data'))
    const checkIsOpen = () =>{
        setOpen(!open)
        console.log(open);
    
    }

    const addItem = () => {
        const NewAlarm = { id: new Date().getTime().toString(),hour: hour,min: min};
        setData([...data,NewAlarm])
        setOpen(false);
    

    }

            
    const editTimer= (id) => {

        const specificItem = data.find((item) => item.id === id)
        console.log(specificItem);
        setOpen(true)
        
      
      //  setHour(specificItem.hour)
        //setMin(specificItem.min)
        
      };

    const addHour = () => {
        if(hour > 22){
            setHour(0)
        }else{ 
            setHour(hour+1)
        }
    }

    const addMin = () => {
        if(min > 58){
            setMin(0)
        }else{ 
            setMin(min+1)
        }
    }

    const rmvHour = () => {
        if(hour < 1){
            setHour(23)
        }else{ 
            setHour(hour-1)
        }
    }

    const rmvMin = () => {
        if(min < 1){
            setMin(59)
        }else{ 
            setMin(min-1)
        }
    }
    

    useEffect(() => {
        localStorage.setItem('data',JSON.stringify(data))
        
        
    }, [data])


return(

    
   <Center >
       
        
       <h1>Alarm</h1>

       
      <Button className="corner" onClick={(checkIsOpen)}></Button>

      <Grid>
       {data.map( (item) => {
           const id = item
                  
                 return <SingleAlarm editTimer={editTimer}  id={id} key={item.id} hour={item.hour} min={item.min}></SingleAlarm>
             
            })}
            </Grid>
            
        {open && <AlarmWindow  item={checkIsOpen} addItem={addItem} hours={hour} mins={min} addHour={addHour} addMin={addMin} rmvHour={rmvHour} rmvMin={rmvMin}/> }    
   </Center>
)

}

export default Alarm
