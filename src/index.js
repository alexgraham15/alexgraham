import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Layout from './Components/App';
import store from './Store/index'
import './CSS/index.css';
import * as serviceWorker from './serviceWorker';

const App = document.getElementById('root')
ReactDOM.render(<Provider store={store}>
    <Layout />
    </Provider>, App);

serviceWorker.unregister();
