import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import MessageList from "./components/Messages/MessageList";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-content-wrapper">
                    <Route path='/profile'
                           render={() => <Content posts={props.appState.postState}
                                                  dispatch={props.dispatch}
                           />}/>
                    <Route exact path='/messages'
                           render={() => <Dialogs posts={props.appState.postState} users={props.appState.dialogState}/>}/>
                    {props.appState.dialogState.map((user, index) =>
                        <Route key={index} exact path={`/messages/${index + 1}`}
                               render={() => <MessageList user={user}
                                                          userId={index}
                                                          messages={user.messages}
                                                          dispatch={props.dispatch}
                               />}/>
                    )}
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
