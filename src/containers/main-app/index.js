import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import dashboard from "./content/dashboard";
import React, {Component} from 'react';
import SideBar from "./sidebar";
import Header from "./header";


class MainApp extends Component {
    render() {
        const {match} = this.props;
        return (
            <div className='App'>
                <Header/>
                <SideBar/>
                <Switch>
                    <Route path={`${match.url}/dashboard`} component={dashboard}/>
                    <Redirect to="/error"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainApp);