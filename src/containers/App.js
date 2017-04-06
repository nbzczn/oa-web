import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Theme from '../constants/Theme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Needed for onTouchTap for Material UI

// = styles =
// 3rd
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';

class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
                <div id="app-inner">
                    <div className="preloaderbar hide"><span className="bar"></span></div>
                    <div
                        className="full-height fixed-header nav-collapsed">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
module.exports = connect()(App);
