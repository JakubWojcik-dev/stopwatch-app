import {react, useState} from "react";
import { Center, InputWrapper, Span, Switch } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min}) =>{

    const [isChecked, setIsChecked] = useState(false)
    return(
        <Center >
            <p>{hour > 10 ? hour : '0'+hour}:{min > 10? min : "0" + min}</p>
            <div>
            <h5>Alarm,</h5>
            <h6> Not repated</h6>
            </div>
            <InputWrapper>
                <Switch type="checkbox" onChange = {(e) => setIsChecked(e.target.checked)}/>
            <Span/>
            </InputWrapper>
              
        </Center>
    )
}

export default SingleAlarm