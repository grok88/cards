import {combineReducers, createStore} from "redux";
import {loginReducer} from "../m1-ui/login/loginReducer";

const RootReducer = combineReducers({
    login:loginReducer,
    // register:registerReducer,
    // restorePass:restorePassReducer,
    // enterPass :enterPassReducer,
    // profile:profileReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer);
// @ts-ignore
window.store = store;