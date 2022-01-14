import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WithdrawPage() {
  const balance = useSelector((state: any) => state.BalanceReducer.balance);
  const loan = useSelector((state: any) => state.LoanReducer.loan);
  const dispatch = useDispatch();

  function handleWithdraw() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }
  return (
    <>
      <h1>Withdraw Page</h1>
      <h2>Balane: {balance}</h2>
      <button onClick={handleWithdraw}>WithDraw</button>
      <h2>{loan ? "Loan Applied" : "Loan Need"}</h2>
    </>
  );
}

export default WithdrawPage;
