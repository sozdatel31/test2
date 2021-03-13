import React, {useState} from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendered");
    let [select, setSelect] = useState(false)
    return (
        <div>
            <Star/>

            <Star/>

            <Star />

            <Star />

            <Star/>

        </div>
    );

}

type StarPropsType = {
    selected: boolean;
};

function Star() {
    let [select, setSelect] = useState(false)
    console.log("StarRenderig");
    if (select === true) {
        return (<span>
            <b>Star</b> <button onClick={()=>{setSelect(!select)}}>222</button></span>
        )
    } else {
        return (<span>
            Star  <button  onClick={()=>{setSelect(!select)}}>222</button></span>)
    }
    ;
}