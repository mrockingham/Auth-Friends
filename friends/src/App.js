import React from 'react';

import './App.css';
import Login from './components/Login'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Header from './components/Header'
import Friends from './components/Friends'
import PrivateRoute from './components/PriveteRoute'


function App() {
  return (
    <Router>
      <div className="App">
        < Header />
        <h1>Friends APP</h1>
        
<Switch>
    <PrivateRoute  path='/protected' component={Friends}/>
    <Route path='/login' component= {Login}/>
    <Route component={Login} />

</Switch>

      </div>
    </Router>
  );
}

export default App;
