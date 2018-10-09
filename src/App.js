import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Grid} from 'react-bootstrap';


import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {Tool} from "./components/Tool";
import {Info} from "./components/Info";

class App extends React.Component {
  render() {
    return (

      <Router>
        <Grid>
          <Header/>
          <hr/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tool" component={Tool}/>
            <Route path="/info" component={Info}/>
          </Switch>
          <hr/>
          <Footer/>
        </Grid>
      </Router>

    );
  }
}

export default App;
