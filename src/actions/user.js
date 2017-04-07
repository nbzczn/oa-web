import {
    LOGGED_DOING,
    LOGGED_ERROR,
    LOGGED_IN,
    LOGGED_OUT
} from './const'
import Request from '../constants/Request'
import {authApi} from '../constants/Api'
import {passwrodClient} from '../constants/Oauth'

export const logIn = (opt) => {
    return (dispatch) => {
        // 将状态设置为登陆中
        dispatch({'type': LOGGED_DOING})
        // 请求token验证
        Request.post(authApi.token, {
            grant_type: 'password',
            client_id: passwrodClient.client_id,
            client_secret: passwrodClient.client_secret,
            username: opt.username,
            password: opt.password
        }).then((res) => {
            // 执行登录成功reducer
            dispatch({
                type: LOGGED_IN,
                user: res.data
            })
        }).catch((err) => {
            // 执行登录失败reducer
            dispatch({
                type: LOGGED_ERROR
            })
        })
    }
}
export const logOut = () => {
    return {
        type: LOGGED_OUT
    }
}