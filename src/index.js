import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import MainComponent from './components/MainComponent';
import { reducer } from './store/reducers'
import { createStore } from 'redux'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('root'));

