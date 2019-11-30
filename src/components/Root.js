import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

class Root extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="Login" component={Login} title="login"  initial={true}/>
                    <Scene key="Signup" component={Signup} title="signup" />
                </Scene>
            </Router>
        );
    }
}

export default Root;