import React from 'react';

const input =(props:{type:string,placeholder:string})=>{
    return <>
        <input type={props.type} placeholder={props.placeholder} />
    </>
}

export default input;