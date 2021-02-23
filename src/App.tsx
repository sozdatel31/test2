import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

/*
function hello() {
    debugger
    alert("hello IT-camasutra");
}
*/

//hello();

function App() {
    console.log("App rendered");
    debugger
    return (
        <div>
            <PageTitle title={"My friends"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"Users"}/>
            <PageTitle title={"This is APP component"}/>

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
