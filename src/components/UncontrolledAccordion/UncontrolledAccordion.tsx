import React, {useState} from 'react';

type AccordionPropsType = {
 title: string;
// collapse: boolean;
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapse, setCollapse] = useState(true)
    console.log("Accordeon rendered");
        return (<div>
            <AccordionTitle title={props.title} onClick={ ()=>{setCollapse(!collapse)}}/>
            { !collapse && <AccordionBody/>}
        </div>)
    ;

}
type AccordionTitlePropsType = {
title: string;
onClick: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordeonTitle rendered");
    return <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
};

function AccordionBody() {
    console.log("AccordeonBody rendered");
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
};
