import React from 'react';

import Notifications from './Notifications'
import UserMenus from './UserMenus'
import APPCONFIG from 'constants/Config';
import { Link } from 'react-router';


class Header extends React.Component {
    componentDidMount() {
        const { sidebarToggler } = this.refs;
        const $sidebarToggler = $(sidebarToggler);
        const $body = $('#body');

        $sidebarToggler.on('click', (e) => {
            // _sidebar.scss, _page-container.scss
            $body.toggleClass('sidebar-mobile-open')
        })
    }

    render() {

        return (
            <section className="app-header">
                <div className="app-header-inner bg-color-light">
                    <div className="hidden-lg-up float-left">
                        <a href="javascript:;" className="md-button header-icon toggle-sidebar-btn" ref="sidebarToggler">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>

                    <div className="top-nav-right">
                        <UserMenus />
                    </div>
                    <div className="top-nav-right">
                        <Notifications />
                    </div>
                </div>
            </section>
        );
    }
}



module.exports = Header

