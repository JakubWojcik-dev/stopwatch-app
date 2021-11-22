import {react, useEffect, useState} from "react";
import { Center, InputWrapper, Span, Switch,Alert } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min}) =>{

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
            {isChecked && <Alert/> } 
            
        </Center>
    )
}

export default SingleAlarm