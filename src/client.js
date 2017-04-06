import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './stores'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

// 定位到顶部的函数
function scrollToTop() {
    window.scrollTo(0, 0)
}

// 判断是否登录
function checkHasLoggedIn(nextState, replace) {
    let {userStore} = store.getState()
    if (userStore.isLoggedIn && nextState.location.pathname !== '/forgotPassword'){
        replace(nextState.location.pathname)
    }else{
        replace('/login')
    }
}
// 定义根路由
const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./containers/App'),
        indexRoute: {
            onEnter: checkHasLoggedIn
        },
        childRoutes: [
            require('./routes/app'),
            require('./routes/login'),
        ]
    }]
}

render(
    <Provider store={store}>
        <Router
            onUpdate={scrollToTop}
            history={history}
            routes={rootRoute}
        />
    </Provider>,
    document.getElementById('app-container')
)