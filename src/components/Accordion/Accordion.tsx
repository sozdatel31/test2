import React from "react";

type ItemsPropsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string;
    collapse: boolean;
    setAccCollapse: (accCollapse: boolean) => void
    items: ItemsPropsType[]
    onClick: (value:any)=>any
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordeon rendered");
    return (<div>
        <AccordionTitle title={props.title} onClick={props.setAccCollapse} collapse={props.collapse}/>
        {!props.collapse && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    onClick: (value:any)=>any
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordeonBody rendered");
    return <ul>
        {props.items.map((i, index) => <li
            onClick={()=>{props.onClick(i.value)}}
            key={index}>{i.title}</li>)}
    </ul>
};

