import { useState } from "react";

function useList(initName:any){
    const [item,setItem]=useState(initName);

    return {
        item,
        remove(selectedKey:number){
            const filterVal=item.filter((val: any,ind: number)=> ind !== selectedKey);
            setItem( filterVal);
        }
    }
}

export default useList;