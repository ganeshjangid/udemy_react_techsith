import { useEffect,useRef } from "react";

function usePrevious(value:any){
 const ref=useRef(null);
 useEffect(()=>{
    ref.current=value;
 });
 return ref.current;
}

export default usePrevious;