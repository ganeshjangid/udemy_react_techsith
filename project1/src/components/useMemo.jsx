import React,{useEffect} from 'react';

let renderCnt=0;
function useMemo(){

    useEffect(()=>{
        renderCnt++;
    });
   return <div>Render Count : {renderCnt}</div>;     
}   


export default useMemo;