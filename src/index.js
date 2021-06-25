import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import './index.css';
 
 
ReactDOM.render(
    <BrowserRouter history={createBrowserHistory()}>
        <Switch>
            <Route exact path = '/' render={() => <Header><App /></Header>} />
            <Route path = '/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path = '/music-master' render={() => <Header><MusicMaster /></Header>} />
        </Switch>
    </BrowserRouter>,
   document.getElementById('root')
  
);

