/*
  React Ethereal - 2018

  Main Content APP
*/

import React from 'react';
import {Route, Switch} from 'react-router';

/* routes */
import PrivateRoute from './session/PrivateRoute.react';

/* run welcome */
import Welcome from './welcome/Welcome.react';
import SearcherContainer from './search/SearcherContainer.react'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <Switch>
        <Route path="/" component={SearcherContainer}/>
        // <PrivateRoute exact={true} path="/locked"/>
      </Switch>
    )
  }
}

/* default export */
export default App;
