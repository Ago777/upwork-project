import {Redirect, Route, Switch, BrowserRouter as Router, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import React, {Component, Fragment} from 'react';
import Error from './shared/components/error';
import {defaultStartPath} from './constants';
import MainApp from "./containers/main-app";
import Login from "./containers/Login";


const InitialPath = ({component: Component, user, ...rest}) =>
    <Route
        {...rest}
        render={props => user ? <Component {...props} /> : <Redirect to='/login'/>}
    />;

class App extends Component {

    render() {
        const {location, match, user} = this.props;
        if (location.pathname === '/' || location.pathname === '/app' || location.pathname === '/app/') {
            return (<Redirect to={defaultStartPath}/>);
        }
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <InitialPath user={user} component={MainApp} path={`${match.url}app`}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/error'} component={Error}/>
                        <Redirect to="/error"/>
                    </Switch>
                </Router>
            </Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    const user = state.auth.user;

    return {
        user,
    };
};

export default connect(mapStateToProps, null)(App);

