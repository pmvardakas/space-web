import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { styles } from './Apod.css.js';

class Apod extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            apod: []
        };
    }

    componentDidMount() {
        axios.get("http://192.168.0.4:8082/apod")
            .then(response => {
                this.setState({
                    apod: response.data
                });
            });
    }

    render() {
        const { apod } = this.state;
        const { classes } = this.props;

        return (
            <div class={classes.content_div_style}>
                <Paper className={classes.paper_root} elevation={1}>
                    <Typography variant="h5">
                        Interfacing the curious with NASA Open API data sets in accessible formats.
                    </Typography>
                </Paper>

                <div class={classes.image_div_style}>
                    <Typography className={classes.title_typography} variant="h5">
                        {apod.title}
                    </Typography>
                </div>

                <div class={classes.image_div_style}>
                    <img src={apod.url} class={classes.image_style} />
                </div>

                <div class={classes.image_div_style}>
                    <Typography className={classes.image_reference_style} variant="subtitle1">
                        Source: {apod.copyright} on {apod.date}
                    </Typography>
                </div>

                <div class={classes.source_div_style}>
                    <Typography className={classes.source_typography} variant="h6">
                        Retrieved from {apod.url}:{apod.service_version} as {apod.media_type}
                    </Typography>
                </div>

                <Divider variant='middle' />

                <div class={classes.explanation_div_style}>
                    <Typography className={classes.explanation_typography} variant="h6">
                        {apod.explanation}
                    </Typography>
                </div>
            </div >
        )
    };
}

Apod.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Apod);