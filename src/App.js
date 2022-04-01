//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//        className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//     </header>
//    </div>
//  );
// }

// export default App;

import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";

//import Header from './Header';
//import Technologies from './Technologies';
//import Footer from "./Footer";


const App = (props) => {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'> {/*вынесли общую части css - избежать дублирования кода*/}

                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path='/profile' element={<Profile/>} />
                        <Route path='/dialogs/*' element={<Dialogs/>} />
                    </Routes>
                    {/*<Profile />*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>

        </BrowserRouter>
    )
}
export default App;
