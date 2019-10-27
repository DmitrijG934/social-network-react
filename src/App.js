import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

const App = () => {
    return(
      <div className='app-wrapper'>
        <Header/>
        <Navbar />
        <Content />
        <Footer />
      </div>
    )
};

export default App;
