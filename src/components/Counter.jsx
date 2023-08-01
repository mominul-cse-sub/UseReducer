import { useReducer } from "react";

const initialState = 0;
const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

function Counter (){
    const [count, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h1>Count = {count}</h1>
            <h2>
            <button type="button" onClick={()=>dispatch("increment")}>Increment</button>
            <button type="button" onClick={()=>dispatch("decrement")}>Decrement</button>
            </h2>
            
        </div>
    )
}


export default Counter;