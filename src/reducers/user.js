import {
    LOGGED_OUT,
    LOGGED_IN,
    LOGGED_ERROR,
    LOGGED_DOING
} from '../actions/const'

// 初始state
const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
    error: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        // 登陆中
        case LOGGED_DOING:
            return {
                ...state,
                status: 'doing'
            };
        // 已登陆
        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            };
        // 登出
        case LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };
        // 登陆错误
        case LOGGED_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            }
        default:
            return state;
    }
}