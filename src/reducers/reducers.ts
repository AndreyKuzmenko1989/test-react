import {
    REQUEST_ADDRESS_PENDING,
    REQUEST_ADDRESS_SUCCESS,
    REQUEST_ADDRESS_FAILED
} from '../constants/redux';


const initialStatePhones = {
    isPending: false,
    phones: [],
    error: ''
}

export const requestPhones = (state=initialStatePhones, action :any ={}) => {
    switch (action.type) {
        case REQUEST_ADDRESS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ADDRESS_SUCCESS:
            return Object.assign({}, state, {phones: action.payload, isPending: false})
        case REQUEST_ADDRESS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}