export interface LoanState {
  loan: boolean;
}

const initalState = {
  loan: false,
};

export type Action = { type: string };

function loanReducer(state: LoanState = initalState, action: Action) {
  switch (action.type) {
    case "APPLY":
      return { loan: true };
    default:
      return state;
  }
}

export default loanReducer;
