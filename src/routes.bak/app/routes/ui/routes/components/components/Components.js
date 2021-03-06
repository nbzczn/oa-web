import React from 'react';
import Avatar from './Avatar';
import Badge from './Badge';
import BottomNavigation from './BottomNavigation';
import Callout from './Callout';
import Paper from './Paper';
import Popover from './Popover';
import Progress from './Progress';
import Ribbon from './Ribbon';
import Snackbar from './Snackbar';
import Subheader from './Subheader';
import Tabs from './Tabs';
import Toolbar from './Toolbar';
import QueueAnim from 'rc-queue-anim';

// Not added: App Bar, Divider, Grid List, Left Nav, Subheader, Toolbar, Menu (it breaks ScrollToTop)
// Lack of: Tooltip, Toast, Accordion

const Components = () => {
    return(
        <div className="container-fluid with-maxwidth chapter">

            <QueueAnim type="bottom" className="ui-animate">
                <div key="1"><Snackbar /></div>
                <div key="2"><Popover /></div>
                <div key="3"><Avatar /></div>
                <div key="4"><Badge /></div>
                <div key="5"><Tabs /></div>
                <div key="6"><BottomNavigation /></div>
                <div key="7"><Progress /></div>
                <div key="8"><Toolbar /></div>
                <div key="9"><Callout /></div>
                <div key="10"><Ribbon /></div>
                <div key="11"><Paper /></div>
            </QueueAnim>

        </div>
    )
}

module.exports = Components;
