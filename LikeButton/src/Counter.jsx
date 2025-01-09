import { useState } from "react";
export default function Counter(){
    function increaseCount(){
        setCount(count+1);
    }
    let [count,setCount]=useState(0);
    return(
        <>
        <h3>Count={count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
        </>
    )

}