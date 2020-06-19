import React,{useReducer} from 'react'
const initialState = {count: 0}
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
         case 'decrement    ':
                return {count: state.count - 1}
        
        default:
            throw new Error()
    }
}
 function Counter () {
    const [state, dispatch] = useReducer(reducer, initialState);
    
        return (
            <>
                Count: {state.count}
                <br/>
                <button onClick={()=> dispatch({type:'increment'})}>+</button>
                <button onClick={()=> dispatch({type:'decrement'})}>-</button>

            </>
        );
}
//lazy initialization
// f
function init(initialCount) {
    return {count: 0};
    }
    
    function lazyreducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        case 'reset':
        return init(action.payload);
        default:
        throw new Error();
    }
    }
    
    function LazyCounter({initialCount}) {
    const [state, dispatch] = useReducer(lazyreducer, initialCount, init);
    return (
        <>
        Count: {state.count}
        <button
            onClick={() => dispatch({type: 'reset', payload: initialCount})}>
            Reset
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
    }
    
export default function Display (props) {
    return(
        <>
            <Counter/>
            <LazyCounter/>
        </>
    )
}