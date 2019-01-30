import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul className="sidebar-nav">
                    <li>
                        <div className={`d-flex align-items-center ${true? 'active': ''}`}>
                            <i className='material-icons'>dashboard</i>
                            Dashboard
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>schedule</i>
                            Appointments
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>notifications_none</i>
                            Reminders
                        </div>
                    </li>
                    <hr className='mt-2 mb-2'/>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>calendar_today</i>
                            Calendar
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>people</i>
                            Patients
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>local_phone</i>
                            Phone Leads
                        </div>
                    </li>
                    <hr className='mt-2 mb-2'/>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>star</i>
                            Reviews
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>trending_up</i>
                            SEO
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                            <i className='material-icons'>location_on</i>
                            Listings
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;