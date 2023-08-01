import ComponentD from "./ComponentD";
import { useContext } from "react";
import { counterContext } from "../App";


function ComponentC(){
    const countCotext = useContext(counterContext);
    return(
        <div>
            <h2>ComponentC</h2>
            <button type="button" onClick={()=>countCotext.countDispacth("increment")}>Increment</button>
            <button type="button" onClick={()=>countCotext.countDispacth("decrement")}>Decrement</button>
            <ComponentD></ComponentD>
        </div>
    )
}

export default ComponentC;