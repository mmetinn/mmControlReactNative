import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MainPage from '../pages/MainPage';

class Root extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="Login" component={Login} title="login"  />
                    <Scene key="Signup" component={Signup} title="signup" />
                    <Scene key="Main" component={MainPage} title="main" initial={true} />
                </Scene>
            </Router>
        );
    }
}

export default Root;