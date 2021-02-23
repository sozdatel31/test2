import React from "react";

function Accordion() {
    console.log("Accordeon rendered");
    return (<div>
            <AccordionTitle/>
            <AccordionBody/>


        </div>

    );

}

function AccordionTitle() {
    console.log("AccordeonTitle rendered");
    return <h3>Меню</h3>
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