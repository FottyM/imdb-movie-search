import PropTypes from 'prop-types'
import React, {Component, Fragment} from 'react';
import CssBaseline from 'material-ui/CssBaseline'
import {withStyles} from 'material-ui/styles'
import NavBar from './compenents/Navigation/NavBar'
import Main from './compenents/Main/Main';


const styles = theme => ({})


class App extends Component {
    static propTypes = {
        classes: PropTypes.object
    }

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <CssBaseline/>
                <NavBar/>
                <Main/>
            </Fragment>
        );
    }
}

export default withStyles(styles)(App);