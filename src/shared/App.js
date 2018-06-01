import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {About, Home, Posts} from '../pages/index.async';
import Menu from '../components/Menu';
import Phone from '../components/phone/Phone';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/about/:name" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>

                <Route exact path="/phone" component={Phone}/>
            </div>
        );
    }
}

export default App;
