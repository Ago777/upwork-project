import React, {Component} from 'react';

class Header extends Component {

    render() {
        const {toggleSideBar} = this.props.config;

        return (
            <div className="navbar bg-white">
                <div className='row w-100 m-0 p-0'>
                    <div className='d-inline-flex align-items-center col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6'>
                        <div className='header-logo'/>
                        <div className='menu' onClick={toggleSideBar}>
                            <svg className="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                                <rect x="0" y="0" width="24" height="2.5"/>
                                <rect x="8" y="6" width="16" height="2.5"/>
                                <rect x="0" y="12" width="24" height="2.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="form-inline col-xl-6 col-lg-5 col-md-4 col-sm-5 col-3">
                        <i className='material-icons'>search</i>
                        <input placeholder='Search' className='search hide w-50 h-100 pl-3'/>
                    </div>
                    <div className='d-inline-flex align-items-center justify-content-end col-xl-4 col-lg-4 col-md-4 col-sm-2 col-3'>
                        <div className='help'><i className='material-icons'>help</i></div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className='profile-pic'/>
                               <span>Transformologie</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;