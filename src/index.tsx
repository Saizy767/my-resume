import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { setupStore } from './store/store';

const container = document.getElementById('root');
const Store = setupStore()
hydrateRoot(container, <Provider store={Store}><App/></Provider>);