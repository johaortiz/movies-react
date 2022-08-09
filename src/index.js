import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App'
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.css';

// NUEVA forma de crear un componente en React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store} >
        <App />
    </Provider>
)
