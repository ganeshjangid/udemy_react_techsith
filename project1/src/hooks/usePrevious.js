import React,{useEffect,useRef,useDebugValue} from 'react';


function usePrevious(value){
    const ref=useRef(null);
    useEffect(()=>{
        ref.current=value;
    });

    useDebugValue(ref.current > 18 ? 'Too Many': 'Too Little');

    return ref.current;
}

export default usePrevious;