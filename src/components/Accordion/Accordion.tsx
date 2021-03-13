import React from "react";

type AccordionPropsType = {
 title: string;
 collapse: boolean;
}
function Accordion(props: AccordionPropsType) {
    console.log("Accordeon rendered");
        return (<div>
            <AccordionTitle title={props.title}/>
            { !props.collapse && <AccordionBody/>}
        </div>)
    ;

}
type AccordionTitlePropsType = {
title: string;
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordeonTitle rendered");
    return <h3>{props.title}</h3>
};

function AccordionBody() {
    console.log("AccordeonBody rendered");
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
};

export default Accordion;