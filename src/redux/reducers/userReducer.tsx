import IUserInfo from '../../interfaces/IUserInfo'

interface IAction {
    type: string,
    payload: IUserInfo
}

let defaultState:IUserInfo = {
    position: '',
    description: '',
    phone: '',
    address: '',
    organization: '',
    _id: '',
    name: '',
    email: '',  
}

const userReducer = (state:object = defaultState, action:IAction)  => {
    switch (action.type) {
        case 'ASSIGN_USER': 
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;