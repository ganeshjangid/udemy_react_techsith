import { useState } from "react";
import NameTag from "./nameTag";

const initName=[
    {name:"Ganesh"},
    {name:"Nagesh"},
    {name:"Kumar"},
    {name:"Suthar"},

]

function List(){
    const [name,setName]=useState(initName);
    return (
        <>
                <h1>List</h1>
                {
                    name.map((val,ind)=><NameTag name={val.name} key={ind}></NameTag>)
                }


                {/* <NameTag name={name[0].name}></NameTag>
                <NameTag name={name[1].name}></NameTag>
                <NameTag name={name[2].name}></NameTag> */}
                
        </>

    )
}

export default List;