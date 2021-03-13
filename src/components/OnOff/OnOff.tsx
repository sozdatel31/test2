import React, {useState} from "react";
import s from "./OnOff.module.css"

// type OnOffPropsType = {
//     power: boolean;
// }

function OnOff() {
let [power, setPower] = useState(true)
    const onStyle = {
        border: "solid",
        padding: "5px",
        margin: "3px",
        backgroundColor: power? "lawngreen" : "white",
        display: "inline-block"
    }
    const offStyle = {
        border: "solid",
        padding: "5px",
        margin: "3px",
        backgroundColor: power? "white" : "red",
        display: "inline-block"
    }

    const lampStyle = {
        width: "5px",
        height: "5px",
        border: "solid",
        padding: "5px",
        borderRadius: "50%",
        backgroundColor: power? "lawngreen" : "red",
        display: "inline-block"
    }

    return(<div>
            <div style={onStyle} onClick={()=>{setPower(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setPower(false)}}>Off</div>
            <div style={lampStyle}></div>
        </div>

    )

}

function On() {
    return (
        <div className={s.jjj}>
            <span className={s.On}>On</span>
            <span className={s.Neutral}>Off</span>
            <span className={s.LampOne}>  ....  </span>
        </div>
    )

}

function Off() {
    return (<div className={s.jjj}>
        <span className={s.Neutral}>On</span>
        <span className={s.Off}>Off</span>
        <span className={s.LampTwo}>  .....  </span>
    </div>)
}

export default OnOff;