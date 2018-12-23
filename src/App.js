import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import FundExplorer from './Components/FundExplorer'
import FundComparison from './Components/FundComparison'
import * as ROUTES from './Common/Routes'

const Home = () => <FundExplorer/>;
const Compare = () => <FundComparison/>;
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route path={ROUTES.ROOT} exact component={Home} />
          <Route path={ROUTES.FUND_COMPARISON} exact component={Compare} />
        </div>
      </Router>
    );
  }
}

export default App;
