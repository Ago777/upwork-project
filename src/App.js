import {Redirect, Route, Switch, BrowserRouter as Router, withRouter} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Error from './shared/components/error';
import {defaultStartPath} from './constants';
import MainApp from "./containers/main-app";
import Login from "./containers/Login";
import {Provider} from "react-redux";


const InitialPath = ({component: Component, isLoggedIn, ...rest}) =>
    <Route
        {...rest}
        render={props =>
            isLoggedIn
                ? <Component {...props} />
                : <Redirect
                    to='/login'
                />}
    />;

class App extends Component {
    render() {
        const {location, match} = this.props;
        if ((location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') && true) {
            return (<Redirect to={defaultStartPath}/>);
        }
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <InitialPath isLoggedIn={true} component={MainApp} path={`${match.url}app`}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/error'} component={Error}/>
                        <Redirect to="/error"/>
                    </Switch>
                </Router>
            </Fragment>
        );
    };
}

export default withRouter(App);

