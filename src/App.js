import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-content-wrapper">
                <Content/>
            </div>
            <Footer/>
        </div>
    )
};

export default App;
