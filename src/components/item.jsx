import React from "react";

function item(props) {

    return (
        <div className="item-style">

            {
            props.editable ? (
                <input type="text"
                    defaultValue={
                        props.name
                    }
                    onKeyPress={
                        
                        (e)=> props.onKeyPress(e,props.id)  
                        
                    }/>
            ) : (
                <h3 onDoubleClick={
                    props.onDoubleClick
                }>
                    {
                    props.name
                }</h3>
            )
        }

            <button className="remove-button"
                onClick={
                    props.onClick
                }
                id={
                    props.id
            }>
                Remove
            </button>
        </div>
    );
}

export default item;
