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
import {Route, Routes} from "react-router-dom";
import state, {addPost} from "./redax/state";

//import Header from './Header';
//import Technologies from './Technologies';
//import Footer from "./Footer";


const App = (props) => {



    return (


            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'> {/*вынесли общую части css - избежать дублирования кода*/}

                    <Routes>
                        <Route path="/" element={<App />} />

                     {/*   <Route path='/profile/*' element={<Profile  posts={props.state.posts}/>} />
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogsData={props.state.dialogsData}
                            messages={props.state.messages} />}/>*/}

                     {/*state={props.state.dialogsPage}*/}

                        {/*<Route path='/profile/*' element={ <Profile posts={props.posts}/>} />*/}


                       <Route path='/profile/*' element={ <Profile posts={props.state.profilePage.posts}
                       addPost={props.addPost}/>} />

                     {/*   <Route path='/dialogs/*' element={<Dialogs dialogsData={props.dialogsData}
                            messages={props.messages}/>}/>*/}

                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                   messages={props.state.dialogsPage.messages}/>}/>




                      {/* <Route path='/profile/*' render={ () => <Profile posts={props.posts}/>} />*/}
                     {/*   <Route path='/dialogs/*' render={ () =><Dialogs/>} />*/}

                    </Routes>

                </div>
            </div>


    )
}
export default App;
