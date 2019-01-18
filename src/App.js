import React from 'react';
import Menu from './Menu.js';
import Apod from './Apod.js';
import About from './About.js';
import Projects from './Projects.js';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';
import {styles} from './App.css.js';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.grid_flex_section}>
                <Grid item className={classes.grid_static_col_scroll} >
                    <Menu />
                </Grid>
                <Grid item className={classes.grid_flex_col_scroll} >
                    <Switch>
                        <Route exact path='/' component={Apod} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/nasa' component={() => { window.location.href = 'https://api.nasa.gov/index.html'; return null; }} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </Grid>
            </Grid>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);