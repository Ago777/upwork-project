import {Redirect, Route, Switch} from 'react-router-dom';
import dashboard from "./content/dashboard";
import React, {Component} from 'react';
import SideBar from "./sidebar";
import Header from "./header";


class MainApp extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <SideBar/>
                <Switch>
                    <Route path='/dashboard' component={dashboard}/>
                    <Redirect to="/error"/>
                </Switch>
            </div>
        );
    }
}

export default MainApp;