import React from 'react';
import './../../styles/common.css';

const clss="bgYellow fontBlack fontWhite pad8 width100";

function Button(props){
    return <div className="btnClass">
            <button className={clss}>{props.text}</button>
    </div>
}   

export default Button;
