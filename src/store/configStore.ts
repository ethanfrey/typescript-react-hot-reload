import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { demoReducer } from "../reducers";

export const configureStore = () => {
    if (process.env.NODE_ENV === "production") {
        return createStore(
            demoReducer,
            applyMiddleware(thunk),
        );
    } else {
        return createStore(
            demoReducer,
            composeWithDevTools(
                applyMiddleware(thunk),
            ),
        );
    }
};
