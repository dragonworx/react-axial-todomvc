import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todoapp.jsx';
import App from './app';

window.app = Axial.axis = new App();

ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);