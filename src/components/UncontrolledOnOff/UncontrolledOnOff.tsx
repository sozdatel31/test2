import React, {useState} from "react";

type OnOffPropsType = {
    // power: boolean;
    // setPower: (power: boolean) => void;
}

export function UncontrolledOnOff(props: OnOffPropsType) {
    const [power, setPower] = useState(true)
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
            <div style={onStyle} onClick={()=>setPower(true)}>On</div>
            <div style={offStyle} onClick={()=>setPower(false)}>Off</div>
            <div style={lampStyle}></div>
        </div>

    )

}

