import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

const RootComponent = hot(App);

ReactDOM.render(<RootComponent />, document.getElementById('root'));
