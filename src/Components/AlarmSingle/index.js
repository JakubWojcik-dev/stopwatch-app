import {react, useEffect, useState} from "react";
import { Center, InputWrapper, Span, Switch,Alert } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min}) =>{

    const [isChecked, setIsChecked] = useState(false)
    const [value, setValue] = useState(true)

    //const actuallHour = new Date().getHours().toString()
    const actuallMin = new Date().getMinutes().toString()
     const checkIsChecked = () => {
           
           setValue(!value)

           if(value){

            setIsChecked(true)
            const timeout = setTimeout(() => {
                setIsChecked(false)
            }, 3000);
            return () => clearTimeout(timeout)}
           
        }
     const hourTime = () => {

        const actuallHour = new Date().getHours().toString()
        
        
           
            const   returner = 24 + actuallHour - hour
       


       

          
        
        return returner
     }      
           
       
       
       
    
    return(
        <Center >
            
            <div>
            <h5>Alarm,</h5>
            <h6> Not repated</h6>
            </div>
            <p><div>{hour < 10 ?  '0'+hour : hour }</div>:<div>{min < 10 ? "0" + min : min }</div></p>
            
            <InputWrapper>
                <Switch type="checkbox" onChange= {checkIsChecked }/>
                
            <Span/>
            </InputWrapper>
            {isChecked && <Alert>Alarm ring in {hourTime}, {actuallMin-min}</Alert> } 
            
        </Center>
    )
}

export default SingleAlarm