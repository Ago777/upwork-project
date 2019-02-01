import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import dashboard from "./content/dashboard";
import React, {Component} from 'react';
import SideBar from "./sidebar";
import Header from "./header";


class MainApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuShown: document.documentElement.clientWidth >= 960
        }
    };

    componentDidMount() {
        window.addEventListener('resize', () => this.windowResizeHandler());
    };


    windowResizeHandler = () => {
        const documentWidth = document.documentElement.clientWidth;
        this.setState({
            isMenuShown: documentWidth >= 960
        });
    };

    render() {
        const {props: {match}, state: {isMenuShown}} = this;
        const toggleClass = isMenuShown ? '' : 'hide';

        return (
            <div className='App'>
                <Header config={{toggleSideBar: () => this.setState({isMenuShown: !isMenuShown})}}/>
                <SideBar config={{toggleClass}}/>
                <Switch>
                    <Route path={`${match.url}/dashboard`} component={dashboard}/>
                    <Redirect to="/error"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainApp);