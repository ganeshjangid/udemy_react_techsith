export function loading(){
    return {
        type:"LOADING"
    }
}

export function deposit(){
    return {type:"DEPOSIT",payload:10};
}

export function depositAsync(){
    return dispatch => { 
        dispatch(loading());
        setTimeout(() => {
            dispatch(deposit());
        }, 5000);
        
    };
}

function withdraw(){
    return {type:"WITHDRAW",payload:10};
}