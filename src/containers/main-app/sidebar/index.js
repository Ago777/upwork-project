import {NavLink} from "react-router-dom";
import React, {Component} from 'react';

class SideBar extends Component {

    render() {
        const {toggleClass} = this.props;
        return (
            <div className={`sidebar ${toggleClass}`}>
                <ul className="sidebar-nav">
                    <li>
                        <NavLink to='/app/dashboard'>
                            <i className='material-icons'>dashboard</i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/app/appointments'>
                            <i className='material-icons'>schedule</i>
                            <span>Appointments</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/app/reminders'>
                            <i className='material-icons'>notifications_none</i>
                            <span>Reminders</span>
                        </NavLink>
                    </li>
                    <hr className='mt-2 mb-2'/>
                    <li>
                        <NavLink to='/app/calendar'>
                            <i className='material-icons'>calendar_today</i>
                            <span>Calendar</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/app/patients'>
                            <i className='material-icons'>people</i>
                            <span>Patients</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/app/phones'>
                            <i className='material-icons'>local_phone</i>
                            <span>Phone Leads</span>
                        </NavLink>
                    </li>
                    <hr className='mt-2 mb-2'/>
                    <li>
                        <NavLink to='/app/reviews'>
                            <i className='material-icons'>star</i>
                            <span>Reviews</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/app/ceo'>
                            <i className='material-icons'>trending_up</i>
                            <span>SEO</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/app/listings'>
                            <i className='material-icons'>location_on</i>
                            <span>Listings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;