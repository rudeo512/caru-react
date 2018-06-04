import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './client/Root';
import './index.css';

ReactDOM.render((
    <AppContainer>
        <Root/>
    </AppContainer>), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}