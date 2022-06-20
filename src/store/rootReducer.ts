import { combineReducers } from "redux";
import { phoneReducer } from "../features/phones/redux/reducer";


export const rootReducer = combineReducers({
    phones: phoneReducer
});

export type RootState = ReturnType<typeof rootReducer>
