import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-content-wrapper">
                    <Route path='/profile' component={Content}/>
                    <Route path='/messages' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
