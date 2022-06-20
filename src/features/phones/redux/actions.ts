import { PhoneState } from "./reducer";
import * as PhoneActionTypes from "./types";


export const getPhonesRequest = () => ({
    type: PhoneActionTypes.PHONES_GET_REQUEST
});

export const getPhonesSuccess = (phones: Array<PhoneState>) => ({
    type: PhoneActionTypes.PHONES_GET_SUCCESS,
    payload: { phones: phones }
});

export const getPhonesError = (e: Error) => ({
    type: PhoneActionTypes.PHONES_GET_ERROR,
    payload: { error: e }
});



export type PhoneActions = ReturnType<typeof getPhonesRequest
    | typeof getPhonesSuccess
    | typeof getPhonesError>
