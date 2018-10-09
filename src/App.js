import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Grid} from 'react-bootstrap';


import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {Tool} from "./components/Tool";

class App extends React.Component {
  render() {
    return (

      <Router>
        <Grid>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tool" component={Tool}/>
          </Switch>
          <Footer/>
        </Grid>
      </Router>

    );
  }
}

export default App;
