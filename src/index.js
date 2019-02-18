import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'



const createStoreWithMiddleware = applyMiddleware()(createStore)
const App = () =>{

    return(<div>
        helllo
    </div>)
}

ReactDOM.render(<Provider store={createStoreWithMiddleware()} > <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

