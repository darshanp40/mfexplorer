import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as ROUTES from './Common/Routes'
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container-fluid">
          <Route path={ROUTES.ROOT} exact component={Home} />
          {/* <Route path={ROUTES.BOARD} exact component={Compare} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
