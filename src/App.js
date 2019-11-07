import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './views/Home';
import { Register } from './views/Register';
import { AddOrder } from './views/AddOrder';
import { Overview } from './views/Overview';
import { AllTickets } from './views/AllTickets';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/addorder" component={AddOrder}></Route>
                        <Route path="/overview" component={Overview}></Route>
                        <Route path="/alltickets" component={AllTickets}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;

