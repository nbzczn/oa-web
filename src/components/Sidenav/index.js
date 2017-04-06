import React from 'react';
import SidenavContent from './SidenavContent';
import APPCONFIG from 'constants/Config';
import { Link, hashHistory } from 'react-router';

import sidebarLogo from 'images/sidebar-logo.png'

class Sidebar extends React.Component {
    componentDidMount() {

        // AutoCloseMobileNav
        const $body = $('#body');

        if (APPCONFIG.AutoCloseMobileNav) {
            hashHistory.listen((location) => {
                setTimeout(function() {
                    $body.removeClass('sidebar-mobile-open');
                }, 0);
            })
        }
    }

    render() {
        return (
            <nav className="app-sidebar bg-color-dark">
                <section className="sidebar-header bg-color-info text-center">
                    <img className="logo-img logo-react" src={sidebarLogo} alt=""/>
                </section>

                <section className="sidebar-content">
                    <SidenavContent />
                </section>

                <section className="sidebar-footer">
                    <ul className="nav">
                        <li>
                            <a target="_blank" href={APPCONFIG.productLink}>
                                <i className="nav-icon material-icons"></i>
                                <span className="nav-text"><span>帮助</span> & <span>支持</span></span>
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        );
    }
};

module.exports = Sidebar

