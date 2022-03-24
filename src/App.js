
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

import React from 'react'; // нет ./ т.к. это ссылка на библтотеку из папки node_modules
import './App.css';

import Header from './components/Header';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

//import Header from './Header';
//import Technologies from './Technologies';
//import Footer from "./Footer";


const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Profile />
    </div>);
}
export default App;
