import { apiCall } from '../../api/apiCall'
import {
    REQUEST_ADDRESS_PENDING,
    REQUEST_ADDRESS_SUCCESS,
    REQUEST_ADDRESS_FAILED,
    BASE_API_URL
} from '../../constants/redux'


export const requestPhones = () => (dispatch :any) => {
    dispatch({ type: REQUEST_ADDRESS_PENDING })
    apiCall(BASE_API_URL)
        .then(data => dispatch({ type: REQUEST_ADDRESS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ADDRESS_FAILED, payload: error }))
}