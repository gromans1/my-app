import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import state from './redax/state';*/
import {addPost} from './redax/state';
import {BrowserRouter} from "react-router-dom";


// перерисовываем все дерево, но это не эффективно, но пока так
export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>


        </React.StrictMode>,
        document.getElementById('root')
    );

}
