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
            <Rating value={3}/>
            <Accordion/>
            <AppTitle/>
            <Rating value={4}/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered");
    return (<>This is App component</>);
}



export default App;
