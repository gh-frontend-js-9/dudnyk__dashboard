interface IAction {
    type: string
}

const loggedReducer = (state:boolean = false, action:IAction)  => {
    switch (action.type) {
        case 'SIGN_IN': 
            return true;
        case 'SIGN_OUT':
            return false;    
        default:
            return state;
    }
}

export default loggedReducer;