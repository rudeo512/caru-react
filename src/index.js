import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import Provider from "react-redux/es/components/Provider";
import App from './components/App';
import configureStore from './redux/store/index';
import reducer from './redux/reducer/index';
import './index.css';

const store = configureStore(reducer);

ReactDOM.render((
    <AppContainer>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </AppContainer>), document.getElementById('root'));


if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./redux/reducer', () => {
        const nextRootReducer = require('./redux/reducer/index');
        store.replaceReducer(nextRootReducer);
    });
}