import React, {Component} from 'react';
import profile from "./assets/images/dr.png";
import logo from "./assets/images/logo for time.png";


class App extends Component {
    render() {
        return (
            <div className="App container-fluid" style={{paddingLeft: '35px', paddingRight: '35px'}}>
                <nav className="navbar bg-white" style={{paddingTop: '.7rem', paddingBottom: '.7rem'}}>
                    <div className='row w-100 m-0 p-0'>
                        <div className='d-inline-flex align-items-center col-md-2' style={{paddingLeft: '30px'}}>
                            <div><img src={logo} alt="Logo" width='55' height='35'/></div>
                            <div style={{marginLeft: '80px'}}>
                                <i className='material-icons' style={{color: '#a6a6a6',cursor: 'pointer', fontSize: '22px'}}>menu</i>
                                <span className='right-border'/>
                            </div>
                        </div>
                        <div className="form-inline col-md-8">
                            <i className='material-icons' style={{color: '#a6a6a6'}}>search</i>
                            <input placeholder='Search' className='w-50 h-100 pl-3' style={{border: 'none', outline: 'none'}}/>
                            {/*<input className="form-control form-control-plaintext" style={{color: '#a6a6a6'}} type="search" placeholder="Search"/>*/}
                        </div>
                        <div className='d-inline-flex align-items-center justify-content-between col-md-2'>
                            <div><i className='material-icons' style={{color: '#a6a6a6'}}>help</i></div>
                            <div className="dropdown">
                                <img alt="Profile" src={profile} style={{borderRadius: '30px', width: '40px'}}/>
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dr.Anthony
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav>
                    <ul className="sidebar-nav">
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>dashboard</i>
                                Dashboard
                            </div>
                        </li>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>schedule</i>
                                Appointments
                            </div>
                        </li>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>notifications_none</i>
                                Reminders
                            </div>
                        </li>
                        <hr className='mt-2 mb-2'/>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>calendar_today</i>
                                Calendar
                            </div>
                        </li>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>people</i>
                                Patients
                            </div>
                        </li>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>local_phone</i>
                                Phone Leads
                            </div>
                        </li>
                        <hr className='mt-2 mb-2'/>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>star</i>
                                Reviews
                            </div>
                        </li>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>trending_up</i>
                                SEO
                            </div>
                        </li>
                        <li>
                            <div className='d-flex align-items-center'>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>location_on</i>
                                Listings
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default App;
