import React from 'react';

type MyComInterface={
    name:string
}

function myCom({name}:MyComInterface){
    return <div>
        {name}
    </div>
}

export default myCom;