export interface BalanceState {
  balance: number;
  loading:boolean;
}

const initalState = {
  balance: 0,
  loading:false
};

export type Action = { type: string; payload: number };

function reducer(state: BalanceState = initalState, action: Action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload, loading: false };
    case "WITHDRAW":
      return { balance: state.balance - action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default reducer;
