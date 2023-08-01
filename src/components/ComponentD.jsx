import { useContext } from "react";
import { counterContext } from "../App";


function ComponentD(){
    const countCotext = useContext(counterContext);
    return(
        <div>
            <h2>ComponentD</h2>
            <button type="button" onClick={()=>countCotext.countDispacth("increment")}>Increment</button>
            <button type="button" onClick={()=>countCotext.countDispacth("decrement")}>Decrement</button>
        </div>
    )
}

export default ComponentD;