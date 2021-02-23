import React from "react";

type AccordionPropsType = {
 title: string;
}
function Accordion(props: AccordionPropsType) {
    console.log("Accordeon rendered");
    return (<div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>


        </div>

    );

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