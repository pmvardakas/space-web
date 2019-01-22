import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { styles } from './About.css.js';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            version: '',
        }
    }

    componentDidMount() {
        axios.get("http://192.168.0.4:8082/version")
            .then(response => {
                this.setState({
                    version: response.data
                });
            });
    }

    render() {
        const { classes } = this.props;
        const { version } = this.state;

        return (
            <div class={classes.content_div_style}>
                <div class={classes.explanation_div_style}>
                    <Typography className={classes.explanation_typography} variant="h6">
                        Version {version}
                    </Typography>
                </div>

                <div class={classes.explanation_div_style}>
                    <Typography className={classes.explanation_typography} variant="h6">
                        Through Open API access, this dashboard serves as a learning purpose and facilitates exploring NASA programs.
                    </Typography>
                </div>

                <div class={classes.explanation_div_style}>
                    <Typography className={classes.explanation_typography} variant="h6">
                        Developed by: Peter Vardakas, pmvardakas@gmail.com
                    </Typography>
                </div>
            </div >
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);