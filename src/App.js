import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Tool} from "./components/Tool";

class App extends React.Component {
  render() {
    return (

      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tool" component={Tool}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
