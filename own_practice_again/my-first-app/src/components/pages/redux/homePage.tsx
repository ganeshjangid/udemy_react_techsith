import React from "react";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const balance = useSelector((state: any) => state.BalanceReducer.balance);
  const loanState = useSelector((state: any) => state.LoanReducer.loan);
  const dispatch = useDispatch();

  function handleLoanApply() {
    dispatch({ type: "APPLY" });
  }

  return (
    <>
      <h1>Home PAge</h1>
      <h2>Balance :{balance}</h2>
      <h2>{loanState ? "Loan Applied" : "Loan Need"}</h2>
      <button onClick={handleLoanApply} disabled={loanState ? true : false}>
        {loanState ? "Applied Loan" : "Apply for Loan"}
      </button>
    </>
  );
}

export default HomePage;
