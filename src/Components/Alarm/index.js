import React,{createContext, useEffect, useReducer} from "react";
import { useState } from "react/cjs/react.development";
import { Center,Button } from "./alarm.styles";
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
        
    

    }
   
       

            
//       function setLocal(newItem) {
//           //localStorage.setItem(localItem, newItem)
//           localStorage.setItem('data',JSON.stringify(data))
//           setState(newItem)
  //     }
          
   
//    const [fruit,setFruit] = useLocalStorage('data')

    const addHour = () => {
        if(hour > 23){
            setHour(0)
        }else{ 
            setHour(hour+1)
        }
    }

    const addMin = () => {
        if(min > 59){
            setMin(0)
        }else{ 
            setMin(min+1)
        }
    }
    

    useEffect(() => {
        localStorage.setItem('data',JSON.stringify(data))
        
        
    }, [data])


return(

    
   <Center >
       
        
       <h1>Alarm</h1>

       
      <Button className="corner" onClick={(checkIsOpen)}></Button>

      
       {data.map( (item) => {
                  
                 return <SingleAlarm key={item.id}></SingleAlarm>
             
            })}
            
        {open && <AlarmWindow  item={checkIsOpen} addItem={addItem} hours={hour} mins={min} addHour={addHour} addMin={addMin}/> }    
   </Center>
)

}

export default Alarm
