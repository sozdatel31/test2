import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {useState} from 'react'
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
/*
function hello() {
    debugger
    alert("hello IT-camasutra");
}
*/

//hello();

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accCollapse, setAccCollapse] = useState<boolean>(false)
    const [power, setPower] = useState(true)
    console.log("App rendered");
    debugger
    return (
        <div>
            <PageTitle title={"My friends"}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            <Accordion title={"Menu"} collapse={accCollapse} setAccCollapse={setAccCollapse}/>
            <UncontrolledRating/>
            <PageTitle title={"This is APP component"}/>
            <OnOff power={power} setPower={setPower}/>
            <OnOff power={power} setPower={setPower}/>
            <OnOff power={power} setPower={setPower}/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title={"Zdarova otec"}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered");
    return (<h1>{props.title}</h1>);
}


export default App;
