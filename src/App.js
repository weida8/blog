import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import MyTrails from './components/myTrails'
import Trails from './components/trails'
import Trailblazing from './components/trailblazing'
import {Login, Register} from './components/authentication'
import Home from './components/home'
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <PrivateRoute path="/trails" component={Trails} />
        <PrivateRoute path="/my-trails" component={MyTrails}/>
        <PrivateRoute path="/trailblazing" component={Trailblazing}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  );
}

export default App;
