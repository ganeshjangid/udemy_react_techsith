const initialState={
    loan:false
};

function loanReducer(state=initialState,action){
    switch (action.type) {
        case 'APPLY':  
            return  {loan:true}
        break;
    
        default:
            return state;
        break;
    }
}

export default loanReducer; 