import React from "react";
import StackScreen from "./MyApp/StackNavigator";
import {Provider} from "react-redux";
import store from "./MyApp/GlobalStore";

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <StackScreen />
        </Provider>
    );
}

export default App;
