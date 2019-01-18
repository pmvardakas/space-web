import React from 'react';
import List from '@material-ui/core/List';
import { ListSubheader, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { styles } from './Menu.css.js';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar position="fixed" className={classes.appbar_root} >
                    <Toolbar>
                        <Typography variant="h5" className={classes.appbar_typography} nowrap='true'>
                            NASA Open API Reporting &amp; Analysis Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer classes={{ root: classes.drawer, paper: classes.drawer_paper }} variant="permanent">
                    <List classes={{ root: classes.list_root }}>
                        <a href="https://www.nasa.gov/" >
                            <img src="https://api.nasa.gov/images/logo.png" />
                        </a>

                        <Divider classes={{ root: classes.divider_root, middle: classes.divider_middle }} variant="middle" />

                        <ListItem classes={{ root: classes.listitem_root }} component={Link} to="/" button>
                            <ListItemText classes={{ root: classes.listitemtext_root, primary: classes.listitemtext_primary }} primary="Home" />
                        </ListItem>

                        <ListItem classes={{ root: classes.listitem_root }} component={Link} to="/projects" button>
                            <ListItemText classes={{ root: classes.listitemtext_root, primary: classes.listitemtext_primary }} primary="Projects" />
                        </ListItem>

                        <ListItem classes={{ root: classes.listitem_root }} component={Link} to="/nasa" button>
                            <ListItemText classes={{ root: classes.listitemtext_root, primary: classes.listitemtext_primary }} primary="Open API" />
                        </ListItem>

                        <Divider classes={{ root: classes.divider_root, middle: classes.divider_middle }} variant="middle" />

                        <ListItem classes={{ root: classes.listitem_root }} component={Link} to="/about" button>
                            <ListItemText classes={{ root: classes.listitemtext_root, primary: classes.listitemtext_primary }} primary="About" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    };
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);