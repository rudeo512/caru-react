import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import './index.css';
import Root from './client/Root';

ReactDOM.render((
    <AppContainer>
        <Root/>
    </AppContainer>), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}