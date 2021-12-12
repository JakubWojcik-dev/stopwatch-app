import {react, useEffect, useState} from "react";
import { Center, InputWrapper, Span, Switch,Alert } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min,showInfo, id}) =>{

    const [isChecked, setIsChecked] = useState(false)
    const [value, setValue] = useState(true)

    const actuallHour = new Date().getHours().toString()
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
       
            console.log(returner)

       

          
        
        return console.log("tets");
     }      
    
     const minTime = () => {

        const actuallMin = new Date().getMinutes().toString()
        console.log('tetete')
        return actuallMin
     }      
       
       
       
    
    return(
        <Center >
            
            <div>
            <h5>Alarm,</h5>
            <h6> Not repated</h6>
            </div>
            <p><div>{hour < 10 ?  '0'+hour : hour }</div>:<div>{min < 10 ? "0" + min : min }</div></p>
            
            <InputWrapper>
                <Switch type="checkbox" onChange= {checkIsChecked } onClick={() => showInfo(id)}/>
                
            <Span/>
            </InputWrapper>
            {isChecked && <Alert>Alarm ring in {minTime}</Alert> } 
            
        </Center>
    )
}

export default SingleAlarm