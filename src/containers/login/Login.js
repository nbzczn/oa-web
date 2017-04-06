import React from 'react'
import {connect} from 'react-redux'
import APPCONFIG from 'constants/Config'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import QueueAnim from 'rc-queue-anim'
import {logIn} from 'actions/user'

import LoginLogo from 'images/login-logo.png'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            brand: APPCONFIG.brand,
            username: null,
            password: null
        }
    }

    _handleDoLogin = () => {
        let opt = {
            username: this.state.username,
            password: this.state.password
        }
        this.props._doLogIn(opt)
    }

    _handelChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    _handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        // console.log(this.state.username)
        return (
            <div className="page-login full-height">
                <div className="main-body">
                    <QueueAnim type="bottom" className="ui-animate">
                        <div key="1">
                            <div className="body-inner">
                                <div className="card bg-white">
                                    <div className="card-content">

                                        <section className="logo text-center">
                                            {/*<h1><a href="#/">{this.state.brand}</a></h1>*/}
                                            <img src={LoginLogo} alt=""/>
                                        </section>

                                        <form className="form-horizontal">
                                            <fieldset>
                                                <div className="form-group">
                                                    <TextField
                                                        floatingLabelText="手机号"
                                                        fullWidth={true}
                                                        onChange={this._handelChangeUsername}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <TextField
                                                        floatingLabelText="密码"
                                                        type="password"
                                                        fullWidth={true}
                                                        onChange={this._handleChangePassword}
                                                    />
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div className="card-action no-border text-right">
                                        {/*<a href="#/" className="color-primary">登录</a>*/}
                                        <RaisedButton
                                            label="登录"
                                            primary={true}
                                            onClick={this._handleDoLogin}
                                        />
                                    </div>
                                </div>

                                <div className="additional-info">
                                    {/*<a href="#/sign-up">Sign up</a>*/}
                                    {/*<span className="divider-h"></span>*/}
                                    <a href="#/forgot-password">忘记密码?</a>
                                </div>
                            </div>
                        </div>
                    </QueueAnim>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userStore.isLoggedIn,
        loginStatus: state.userStore.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 执行登录操作
        _doLogIn: (opt) => {
            dispatch(logIn(opt))
        }
    }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Login)
