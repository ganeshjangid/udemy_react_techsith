import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceDispatch from "./actionDeposit";

function DepositPage() {
  const balance = useSelector((state: any) => state.BalanceReducer.balance);
  const loan = useSelector((state: any) => state.LoanReducer.loan);
  const loading = useSelector((state: any) => state.BalanceReducer.loading);
  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch(balanceDispatch.depositAsync());
  }
  return (
    <>
      <h1>Deposit Page</h1>
      <h2>{loading ? "loading....." : `Balance ${balance}`}</h2>
      <button onClick={handleDeposit}>Deposit</button>
      <h2>{loan ? "Loan Applied" : "Loan Need"}</h2>
    </>
  );
}

export default DepositPage;
