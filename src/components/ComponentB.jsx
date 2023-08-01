import ComponentC from "./ComponentC";
import { counterContext } from "../App";
import { useContext } from "react";


function ComponentB(){
    const countCotext = useContext(counterContext);
    return(
        <div>
            <h2>ComponentB</h2>
            <button type="button" onClick={()=>countCotext.countDispacth("increment")}>Increment</button>
            <button type="button" onClick={()=>countCotext.countDispacth("decrement")}>Decrement</button>
            <ComponentC></ComponentC>
        </div>
    )
}

export default ComponentB;