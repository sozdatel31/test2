import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function hello() {
    debugger
    alert("hello IT-camasutra");
}

//hello();

function App() {
    console.log("App rendered");
    debugger
    return (
        <div>
            <Rating/>
            <Accordion/>
            <AppTitle/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered");
    return (<>This is App component</>);
}

function Rating() {
    console.log("Rating rendered");
    return (<div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log("Star rendered");
    return (<div>
            Star
        </div>

    );
}



export default App;
