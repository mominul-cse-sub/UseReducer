import ComponentB from "./ComponentB";
import { useContext } from "react";
import { counterContext } from "../App";


function ComponentA(){
    const countCotext = useContext(counterContext);
    return(
        <div>
            <h2>ComponentA</h2>
            <button type="button" onClick={()=>countCotext.countDispacth("increment")}>Increment</button>
            <button type="button" onClick={()=>countCotext.countDispacth("decrement")}>Decrement</button>
            <ComponentB></ComponentB>
        </div>
    )
}

export default ComponentA;