import React, {Component} from 'react';
// import profile from "./assets/images/dr.png";
// import logo from "./assets/images/logo for time.png";


class App extends Component {
    render() {
        return (
            <div className="App container-fluid" style={{paddingLeft: '35px', paddingRight: '35px'}}>
                <nav className="navbar bg-white" style={{paddingTop: '.8rem', paddingBottom: '.8rem'}}>
                    <div className='row w-100 m-0 p-0'>
                        <div className='d-inline-flex align-items-center col-xl-2 col-lg-3 col-md-4' style={{paddingLeft: '30px'}}>
                            <div><img src='./' width='55' height='35'/></div>
                            <div style={{marginLeft: '80px'}}>
                                <svg className="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                                    <rect x="0" y="0" width="24" height="2.5"/>
                                    <rect x="8" y="6" width="16" height="2.5"/>
                                    <rect x="0" y="12" width="24" height="2.5"/>
                                </svg>
                                {/*<i className='material-icons' style={{color: '#94979b',cursor: 'pointer', fontSize: '22px'}}>menu</i>*/}
                            </div>
                        </div>
                        <div className="form-inline col-xl-8 col-lg-6 col-md-4">
                            <i className='material-icons' style={{color: '#94979b'}}>search</i>
                            <input placeholder='Search' className='w-50 h-100 pl-3' style={{border: 'none', outline: 'none'}}/>
                        </div>
                        <div className='d-inline-flex align-items-center justify-content-between col-xl-2 col-lg-3 col-md-4'>
                            <div><i className='material-icons' style={{color: '#94979b'}}>help</i></div>
                            <div className="dropdown">
                                <img src='./' style={{borderRadius: '30px', width: '40px'}}/>
                                <button style={{boxShadow: 'none'}} className="btn dropdown-toggle" type="button" id="dropdownMenu2"
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
                            <div className={`d-flex align-items-center ${true? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>dashboard</i>
                                Dashboard
                            </div>
                        </li>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>schedule</i>
                                Appointments
                            </div>
                        </li>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>notifications_none</i>
                                Reminders
                            </div>
                        </li>
                        <hr className='mt-2 mb-2'/>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>calendar_today</i>
                                Calendar
                            </div>
                        </li>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>people</i>
                                Patients
                            </div>
                        </li>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>local_phone</i>
                                Phone Leads
                            </div>
                        </li>
                        <hr className='mt-2 mb-2'/>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>star</i>
                                Reviews
                            </div>
                        </li>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
                                <i className='material-icons' style={{fontSize: '20px',marginRight: '12px'}}>trending_up</i>
                                SEO
                            </div>
                        </li>
                        <li>
                            <div className={`d-flex align-items-center ${false? 'active': ''}`}>
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
