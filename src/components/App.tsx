import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {route} from "./routes";
import { configureStore } from "../store/configStore";

const store = configureStore();

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <BrowserRouter children={route} />
            </Provider>
        );
    }
}

export default App;
