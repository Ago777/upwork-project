import {Redirect, Route, Switch, BrowserRouter as Router, withRouter} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Error from './shared/components/error';
import MainApp from "./containers/main-app";
import {defaultStartPath} from './constants';
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
        const {location} = this.props;
        if (location.pathname === '/' && true) {
            return (<Redirect to={defaultStartPath}/>);
        }
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <InitialPath isLoggedIn={true} component={MainApp}/>
                        <Route path={'/login'} component={''}/>
                        <Route path={'/error'} component={Error}/>
                        <Redirect to="/error"/>
                    </Switch>
                </Router>
            </Fragment>
        );
    };
}

export default withRouter(App);

