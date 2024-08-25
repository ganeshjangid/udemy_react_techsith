import React from 'react'
interface NameComponentProps{
    name:string
}

function nameTag({name}:NameComponentProps){

    return (
        <h3 className='title'>{name || 'Please Enter Name'}</h3>
    )
}
export default nameTag;