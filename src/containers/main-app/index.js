import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {getDocumentWidth} from "../../shared/utility";
import Appointments from "./content/appointments";
import Reminders from "./content/reminders";
import Dashboard from "./content/dashboard";
import Calendar from "./content/calendar";
import Patients from "./content/patients";
import Listings from "./content/listings";
import Reviews from "./content/reviews";
import React, {Component} from 'react';
import Phones from "./content/phones";
import Ceo from "./content/ceo";
import SideBar from "./sidebar";
import Header from "./header";


class MainApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuShown: getDocumentWidth() >= 960,
            isMobileSearchShown: false
        };
    };

    componentDidMount() {
        window.addEventListener('resize', () => this.windowResizeHandler());
    };


    windowResizeHandler = () => {
        const {isMobileSearchShown} = this.state;
        this.setState({
            isMenuShown: getDocumentWidth() >= 960,
            isMobileSearchShown: isMobileSearchShown && getDocumentWidth() <= 576
        });
    };

    searchFieldToggle = () => {
        if (getDocumentWidth() > 576) return null;
        const {isMobileSearchShown} = this.state;
        this.setState({isMobileSearchShown: !isMobileSearchShown});
    };


    render() {
        const {props: {match}, state: {isMenuShown, isMobileSearchShown}} = this;
        const toggleClass = isMenuShown ? '' : 'hide';

        return (
            <div className='App'>
                <Header
                    toggleSideBar={() => this.setState({isMenuShown: !isMenuShown})}
                    searchFieldToggle={this.searchFieldToggle}
                    isMobileSearchShown={isMobileSearchShown}
                />
                <SideBar toggleClass={toggleClass}/>
                <Switch>
                    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
                    <Route path={`${match.url}/appointments`} component={Appointments}/>
                    <Route path={`${match.url}/reminders`} component={Reminders}/>
                    <Route path={`${match.url}/calendar`} component={Calendar}/>
                    <Route path={`${match.url}/patients`} component={Patients}/>
                    <Route path={`${match.url}/phones`} component={Phones}/>
                    <Route path={`${match.url}/reviews`} component={Reviews}/>
                    <Route path={`${match.url}/ceo`} component={Ceo}/>
                    <Route path={`${match.url}/listings`} component={Listings}/>
                    <Redirect to="/error"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainApp);