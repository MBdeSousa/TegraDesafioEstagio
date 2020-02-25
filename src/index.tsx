import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

    //Responsible for rendering the App and it's content on the root div of the index.html
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
