import React from "react";
import { useSelector,useDispatch } from "react-redux";

function Home(){
    const balance=useSelector(state => state.balanceReducer.balance);
    const loan=useSelector(state => state.loadReducer.loan);

    const dispatch=useDispatch();

    function applyLoanHandle(){
        dispatch({type:"APPLY"})
    }


    return <div>
    <h2>Balance: {balance}</h2>
    <h3>{loan ? "Loan Applied" : "Loans Needed"}</h3>
    <button className="remove-button" onClick={applyLoanHandle} disabled={loan ? true : false}>{loan ? "Loan Applied" : "Apply For Loan"}</button>
    </div>
}

export default Home;