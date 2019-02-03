import {loginAction} from "../../redux-store/actions";
import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';




class Login extends Component {
    static propTypes = {
        loginAction: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    };

    state = {
        username: '',
        password: ''
    };

    handleChangeInput = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;
        const state = this.state;
        state[name] = value;
        this.setState(state)
    };

    handleLogin = () => {
        const {state: {username, password}, props: {loginAction}} = this;
        if(!username.trim() || !password.trim())  return null;
        loginAction(username, password, this.props.history);
    };

    render() {
        return (
            <Fragment>
                <div className='fixed-background'/>
                <div className="container login">
                    <div className="h-100 row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="auth-card card">
                                <div className="form-side">
                                    <span className="logo"/>
                                    <h5 className="mb-4 card-title">
                                        <span>Login</span>
                                    </h5>
                                    <div>
                                        <label className="form-group has-float-label mb-4">
                                            <input type="email" name='username' className="form-control" onChange={this.handleChangeInput}/>
                                            <span>E-mail</span>
                                        </label>
                                        <label className="form-group has-float-label mb-4">
                                            <input type="password" name='password' className="form-control" onChange={this.handleChangeInput}/>
                                            <span>Password</span>
                                        </label>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href="/forgot-password">
                                                <span>Forget password?</span>
                                            </a>
                                            <button type="button" className="btn-shadow btn btn-primary btn-lg" onClick={this.handleLogin}>
                                                <span>LOGIN</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    const loading = state.auth.loading;

    return {
        loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            loginAction,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);