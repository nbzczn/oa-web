import {createStore, applyMiddleware} from 'redux'
import {hashHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk' // 引入thunk中间件
import {persistStore, autoRehydrate} from 'redux-persist'

// reducers
import reducers from '../reducers'

// 记录日志的中间件
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

// 定义需要调用的中间件
let middlewares = [
    thunk,
    routerMiddleware(hashHistory),
    logger
];
// 添加中间件
let createAppStore = applyMiddleware(...middlewares)(createStore);

// 引出生成store函数
export default function configureStore( onComplete: ()=> void ){
    const store = autoRehydrate()(createAppStore)(reducers);
    let opt = {
        // 转换器
        transform: [
            ''
        ],
        // 存储到缓存的白名单数组, 黑名单用blacklist
        whitelist: [
        ],
        // blacklist: [
        //   'userStore.status',
        // ],
    };
    persistStore(store, opt, onComplete);
    return store;
}
