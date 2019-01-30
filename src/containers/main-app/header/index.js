import React, {Component} from 'react';
import logo from "../../../assets/images/logo for time.png";
import profile from "../../../assets/images/dr.png";

class Header extends Component {
    render() {
        return (
            <div className="navbar bg-white">
                <div className='row w-100 m-0 p-0'>
                    <div className='d-inline-flex align-items-center col-xl-2 col-lg-3 col-md-4'>
                        <div><img src={logo} alt='logo' width='55' height='35'/></div>
                        <div className='logo'>
                            <svg className="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                                <rect x="0" y="0" width="24" height="2.5"/>
                                <rect x="8" y="6" width="16" height="2.5"/>
                                <rect x="0" y="12" width="24" height="2.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="form-inline col-xl-6 col-lg-5 col-md-4">
                        <i className='material-icons'>search</i>
                        <input placeholder='Search' className='search w-50 h-100 pl-3'/>
                    </div>
                    <div className='d-inline-flex align-items-center justify-content-end col-xl-4 col-lg-4 col-md-4'>
                        <div><i className='material-icons'>help</i></div>
                        <div className="dropdown">
                            <img src={profile} alt='logo'/>
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
            </div>
        );
    }
}

export default Header;