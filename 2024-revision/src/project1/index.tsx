import React from 'react';


const styleInternal={
    color: 'yellow',
    fontSize:'100px',
}
const styleInternal2={
    color: 'pink',
    borderColor:'blue',
    borderStyle: 'dotted'
}
function Project1() {

    return (
        <>
            <h1>Ganesh</h1>
            <h2 style={{color:'green'}}>Nagesh</h2 >
            <h3 style={styleInternal}>Pankaj</h3>
            <h4 style={{...styleInternal,...styleInternal2}}>Shetty</h4>
            <h5 className='title'>I am Best</h5>
        </>

    )

}

export default Project1;