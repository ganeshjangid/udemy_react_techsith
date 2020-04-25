import React from "react";
import { useSelector,useDispatch } from "react-redux";

function Withdraw(){
    const balance=useSelector(state => state.balanceReducer.balance);
    const dispatch=useDispatch();

    function onClickHandle(){
        dispatch({type:"WITHDRAW",payload:10});
    }

    return (
    <div>
        <h2>Balance:{balance} </h2>
        <button onClick={onClickHandle} className="remove-button">Withdraw</button>
    </div>
    )
}

export default Withdraw;