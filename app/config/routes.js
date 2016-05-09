import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Signup from '../components/Signup';
import AgendaComponent from '../components/AgendaComponent';



const routes = (
<Router history={hashHistory}>

  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='About' component={About} />
    <Route path='Signup' component={Signup} />
    <Route path='AgendaComponent' component={AgendaComponent}></Route>
  </Route>
</Router>
)
 export default routes;
