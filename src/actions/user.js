
import {
    LOGGED_DOING,
    LOGGED_ERROR,
    LOGGED_IN,
    LOGGED_OUT
} from './const'

export const logIn = (opt) => {
    return (dispatch) => {
        // 将状态设置为登陆中
        dispatch({'type': LOGGED_DOING})
        //
        dispatch({'type': LOGGED_OUT})
    }
}
export const logOut = () => {
    return {
        type: LOGGED_OUT
    }
}