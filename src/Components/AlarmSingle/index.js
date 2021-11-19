import {react, useEffect, useState} from "react";
import { Center, InputWrapper, Span, Switch } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min}) =>{

    const [isChecked, setIsChecked] = useState(false)

   
        useEffect(() => {

            setTimeout(() => {
                alert("dziala")
            }, 3000);   
            
           }, []) 
           
           
       
       
       
    
    return(
        <Center >
            
            <div>
            <h5>Alarm,</h5>
            <h6> Not repated</h6>
            </div>
            <p><div>{hour > 10 ? hour : '0'+hour}</div>:<div>{min > 10? min : "0" + min}</div></p>
            
            <InputWrapper>
                <Switch type="checkbox" onChange = {(e) =>useEffect}/>
            <Span/>
            </InputWrapper>
              
        </Center>
    )
}

export default SingleAlarm