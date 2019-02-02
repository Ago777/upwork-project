import {logoutAction} from "../../../redux-store/actions";
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
    static propTypes = {
        logoutAction: PropTypes.func.isRequired,
    }

    handleLogout = () => {
        logoutAction(this.props.history);
    };

    render() {
        const {props: {toggleSideBar, isMobileSearchShown, searchFieldToggle}} = this;
        if (isMobileSearchShown) return (
            <div className="navbar bg-white">
                <div className="d-flex align-items-center w-100">
                    <input placeholder='Search' className='search-mobile w-100 h-100 pl-3'/>
                    <div onClick={searchFieldToggle}><i className='material-icons'>search</i></div>
                </div>
            </div>
        );

        return (
            <div className="navbar bg-white">
                <div className='row w-100 m-0 p-0'>
                    <div className='d-inline-flex align-items-center col-xl-2 col-lg-3 col-md-4 col-sm-5 col-8'>
                        <div className='header-logo'/>
                        <div className='menu' onClick={toggleSideBar}>
                            <svg className="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                                <rect x="0" y="0" width="24" height="2.5"/>
                                <rect x="8" y="6" width="16" height="2.5"/>
                                <rect x="0" y="12" width="24" height="2.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="form-inline col-xl-6 col-lg-5 col-md-4 col-sm-5 col-2">
                        <div onClick={searchFieldToggle}><i className='material-icons'>search</i></div>
                        <input placeholder='Search' className='search hide w-50 h-100 pl-3'/>
                    </div>
                    <div
                        className='d-inline-flex align-items-center justify-content-end col-xl-4 col-lg-4 col-md-4 col-sm-2 col-2'>
                        <div className='help'><i className='material-icons'>help</i></div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className='profile-pic'/>
                                <span>Transformologie</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" onClick={this.handleLogout}>Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     const loading = state.auth.loading;
//
//     return {
//         loading,
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            logoutAction,
        },
        dispatch
    );
};

export default connect(null, mapDispatchToProps)(withRouter(Header));