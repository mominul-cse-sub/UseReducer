import { useReducer } from "react";

const initialState = 0;
const initialState2 = 3;

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

function CounterThree (){
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);

    return(
        <div>
            <div>
                <h1>Count = {count}</h1>
                <h2>
                <button type="button" onClick={()=>dispatch("increment")}>Increment</button>
                <button type="button" onClick={()=>dispatch("decrement")}>Decrement</button>
                </h2>
            </div>
            <div>
                <h1>Count = {count2}</h1>
                <h2>
                <button type="button" onClick={()=>dispatch2("increment")}>Increment</button>
                <button type="button" onClick={()=>dispatch2("decrement")}>Decrement</button>
                </h2>
        </div>
    </div>
    )
}


export default CounterThree;