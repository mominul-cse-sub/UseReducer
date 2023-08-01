import { useReducer } from "react";

const initialState = {
    counter: 0,
    counter2: 5,
};
const reducer =(state, action)=>{
    switch(action.type){
        case 'increment1':
            return {...state,counter: state.counter + action.value};
        case 'decrement1':
            return {...state,counter: state.counter - action.value};
        case 'increment2':
            return {...state,counter2: state.counter2 + action.value};
        case 'decrement2':
            return {...state,counter2: state.counter2 - action.value};
        default:
            return state;
    }
}

function ComplexCounter (){
    const [count, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <div>
                <h1>Counter1 = {count.counter}</h1>
                <h4>
                <button type="button" onClick={()=>dispatch({type: "increment1" , value: 1})}>Increment by One</button>
                {/* <button type="button" onClick={()=>dispatch({type: "increment" , value: 5})}>Increment by Five</button> */}
                <button type="button" onClick={()=>dispatch({type: "decrement1", value: 1})}>Decrement by One</button>
                {/* <button type="button" onClick={()=>dispatch({type: "decrement", value: 5})}>Decrement by Five</button> */}
                </h4>
            </div>
            <div>
                <h1>Counter2 = {count.counter2}</h1>
                <h4>
                <button type="button" onClick={()=>dispatch({type: "increment2" , value: 1})}>Increment by One</button>
                <button type="button" onClick={()=>dispatch({type: "decrement2", value: 1})}>Decrement by One</button>
                </h4>
            </div>
            
        </div>
    )
}

export default ComplexCounter;