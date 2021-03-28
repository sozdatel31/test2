import React from "react";

type AccordionPropsType = {
    title: string;
    collapse: boolean;
    setAccCollapse: (accCollapse: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordeon rendered");
    return (<div>
        <AccordionTitle title={props.title} onClick={props.setAccCollapse} collapse={props.collapse}/>
        {!props.collapse && <AccordionBody/>}
    </div>)
        ;

}

type AccordionTitlePropsType = {
    title: string
    onClick: (acc: boolean) => void
    collapse: boolean;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordeonTitle rendered");
    return <h3 onClick={() => props.onClick(!props.collapse)}>{props.title}</h3>
};

function AccordionBody() {
    console.log("AccordeonBody rendered");
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
};

