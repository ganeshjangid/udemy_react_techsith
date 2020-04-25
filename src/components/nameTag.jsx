//import React, {Fragment} from 'react';
import React from 'react';
function nameTag(props){

    if(!props.firstName && !props.lastName){
        return (
            <div className="test">
                <h2>Invalid Name</h2>
                <h2>Invalid Name</h2>
            </div>
        );
    } 

    return (
    // <Fragment>
    //     <h2 className="test">FirstName:{props.firstName}</h2>
    //     <h2 className="test">LastName:{props.lastName}</h2>
    // </Fragment>

    
    <div className="test">
        <h2 style={props.style}>FirstName:{props.firstName}</h2>
        <h2>LastName:{props.lastName}</h2>
        {
            props.lastName === "Components3 " && <div style={{color:"green"}}>MyName</div>
        }
    </div>
    );
}

export default nameTag;