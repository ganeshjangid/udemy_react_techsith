import React,{useState,useEffect} from 'react';

function useCustomFetch(url){

    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(null);

    async function customFetch(url){
        try {
            const resp=await fetch(url);
            const rData=await resp.json();

            setData({rData});
            setLoading(false);    

        } catch (error) {
            setError(error);   
            setLoading(false); 
        }
    }

    useEffect(()=>{
        setLoading(true);    
        setTimeout(()=>{
            if(url){
                customFetch(url);
            }
        },3000);
    },[url]);

    return [data,error,loading];
}

export default useCustomFetch;