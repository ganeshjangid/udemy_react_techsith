import React from "react";
import { useSelector,useDispatch } from "react-redux";

import * as balanceAction from './../action/balanceActions';

function Deposit(){

    const balance=useSelector(state => state.balanceReducer.balance);
    const load=useSelector(state => state.balanceReducer.loading);

    const dispatch=useDispatch();

    function onClickHandle(){
        dispatch(balanceAction.depositAsync());
    }

    return (
        <div>
        {
            load ? <h2>Loading ...</h2> : <h2>Balance:{balance} </h2>
        }
            
            <button onClick={onClickHandle} className="remove-button">Deposit</button>
        </div>
    )
}

export default Deposit;