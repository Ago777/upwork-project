import React, {Component, Fragment} from 'react';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className='fixed-background'/>
                <div className="container login">
                    <div className="h-100 row">
                        <div className="col-12 col-md-10">
                            <div className="auth-card card">
                                <div className="form-side">
                                    <span className="logo"/>
                                    <h5 className="mb-4 card-title">
                                        <span>Login</span>
                                    </h5>
                                    <form className="">
                                        <label className="form-group has-float-label mb-4">
                                            <input type="email" className="form-control"/>
                                            <span>E-mail</span>
                                        </label>
                                        <label className="form-group has-float-label mb-4">
                                            <input type="password" className="form-control"/>
                                            <span>Password</span>
                                        </label>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href="/forgot-password">
                                                <span>Forget password?</span>
                                            </a>
                                            <button type="button" className="btn-shadow btn btn-primary btn-lg">
                                                <span>LOGIN</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
}

export default Login;