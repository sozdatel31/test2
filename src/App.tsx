import React from 'react';
import './App.css';

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

function Accordion() {
    console.log("Accordeon rendered");
    return (<div>
            <AccordionTitle/>
            <AccordionBody/>


        </div>

    );

}

function AccordionTitle() {
    return <h3>Меню</h3>
};
function AccordionBody() {
return  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
};

export default App;
