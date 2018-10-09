import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {Tool} from "./components/Tool";
import {Info} from "./components/Info";

class App extends React.Component {
  render() {
    return (

      <Router>
        <div>
          <Header/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/tool" component={Tool}/>
                <Route path="/info" component={Info}/>
              </Switch>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
