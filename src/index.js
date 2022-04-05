import React from 'react';
import { createRoot, render } from 'react-dom/client';
import './styles/index.css';
import { App } from './App'

// NUEVA forma de crear un componente en React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render( <App />)
