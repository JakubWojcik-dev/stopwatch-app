import {react, useEffect, useState} from "react";
import { Center, InputWrapper, Span, Switch,Alert, Button } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min, id,editTimer}) =>{

    const [isChecked, setIsChecked] = useState(false)
    const [value, setValue] = useState(true)

   
     const checkIsChecked = () => {
           
           setValue(!value)

           if(value){

            setIsChecked(true)
            const timeout = setTimeout(() => {
                setIsChecked(false)
            }, 3000);
            return () => clearTimeout(timeout)}
           
        }
          
    
     const getTime = () => {
        let actuallHour = new Date().getHours().toString()
        let actuallMin = new Date().getMinutes().toString()

       
        if(hour == 0)
            hour = 24


        if(actuallHour < hour){
            actuallHour = hour - actuallHour
           
        }else if(actuallHour > hour){
            actuallHour = 24 - (actuallHour - hour)
        }

        if(actuallMin > min){
            actuallMin = 60 - (actuallMin - min)
            actuallHour = actuallHour - 1
           
        } else  if(actuallMin <= min){
            actuallMin = min - actuallMin
            
        }

        
        return {actuallHour, actuallMin}
     }      
       
    
       
    
    return(
        <Center >
            
            <div>
            <h5>Alarm,</h5>
            <h6> Not repated</h6>
            </div>
            <p><div>{hour < 10 ?  '0'+hour : hour }</div>:<div>{min < 10 ? "0" + min : min }</div></p>
            <Button onClick={() => editTimer(id)} >Edit</Button>
            <InputWrapper>
                <Switch type="checkbox" onChange= {checkIsChecked } />
                
            <Span/>
            </InputWrapper>
            {isChecked && <Alert>{ getTime().actuallMin != 0 ? `Ring in ${getTime().actuallHour} hours and ${getTime().actuallMin} minutes ` 
            : `Ring in ${getTime().actuallHour} hours`}</Alert> } 
            
        </Center>
    )
}

export default SingleAlarm