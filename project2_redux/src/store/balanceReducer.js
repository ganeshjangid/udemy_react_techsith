const initialState={
    balance:0,
    loading:false
};

function reducer(state=initialState,action){
    switch (action.type) {
        case 'DEPOSIT':  
            return  {balance:state.balance+action.payload,loading:false}
        break;
        
        case 'WITHDRAW':    
            return  {balance:state.balance - action.payload,loading:false}
        break;

        case 'LOADING':
            return {...state,loading:true}
        break;    
    
        default:
            return state;
        break;
    }
}

export default reducer; 