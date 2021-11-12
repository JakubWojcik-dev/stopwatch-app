import react from "react";
import { useState } from "react/cjs/react.development";
import { Center } from "./alarm.styles";
import SingleAlarm from "../AlarmSingle";

const Alarm = () => {

    const [playing, setPlaying] = useState(false)
return(

   <Center>
       <h1>Alarm</h1>
       <SingleAlarm/>
       
   </Center>
)

}

export default Alarm
