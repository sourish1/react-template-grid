import React from 'react';

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Applications from './components/Applications.js';
import Reports from './components/Reports.js';
import Access from './components/Access.js';
import Chat from './components/Chat.js';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
        <Route exact path='/'>
          <Content />
          <Applications />
          <Reports />
          <Access />
        </Route>
        <Route exact path='/chat'>
        <Chat />
        </Route>
    </Switch>
    </div>
  );
}

export default App;
