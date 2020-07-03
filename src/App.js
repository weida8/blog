import React from 'react';
import { Route, Switch } from "react-router-dom";
import MyTrails from './components/myTrails'
import Trails from './components/trails'
import Trailblazing from './components/trailblazing'
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/trails" component={Trails}/>
        <Route path="/my-trails" component={MyTrails}/>
        <Route path="/trailblazing" component={Trailblazing}/>
        <Route path="/" component={Trails}/>
      </Switch>
    </Layout>
  );
}

export default App;
