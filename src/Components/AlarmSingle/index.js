import {react, useState} from "react";
import { Center, InputWrapper, Span, Switch } from "./AlarmSingle.styles";

const SingleAlarm = ({hour,min}) =>{

    const [isChecked, setIsChecked] = useState(false)
    return(
        <Center >
            <p>12:00{hour} {min}</p>
            <InputWrapper>
                <Switch type="checkbox" onChange = {(e) => setIsChecked(e.target.checked)}/>
            <Span/>
            </InputWrapper>
              
        </Center>
    )
}

export default SingleAlarm