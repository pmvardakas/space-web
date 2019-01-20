import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../Projects.css.js';
import { object } from 'prop-types';
import { Card, CardContent, TextField } from '@material-ui/core';

class ProjectPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
        };
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.id + " " + prevProps.id);
        if (this.props.id !== prevProps.id) {
            axios.get(`http://192.168.0.4:8082/spring-rest/projects/project?id=${this.props.id}`)
                .then(response => {
                    this.setState({
                        project: response.data
                    });
                });
        }
    }

    componentDidMount() {
        axios.get(`http://192.168.0.4:8082/spring-rest/projects/project?id=${this.props.id}`)
            .then(response => {
                this.setState({
                    project: response.data
                });
            });
    }

    render() {
        const { classes } = this.props;
        const { project } = this.state;

        if (project === null) {
            return null;
        }

        console.log(project);

        return (
            <Card classes={{ root: classes.card_root }}>
                <CardContent>
                    <TextField
                        label="Project Title"
                        value={project.project.title}
                        margin="normal"
                        fullWidth="true"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        label="Program Directors"
                        value={project.project.programDirectors.programDirector}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Program Managers"
                        value={project.project.programManagers.programManager}
                        margin="normal"
                        variant="outlined"
                    />
                    {project.project.projectManagers && <TextField
                        label="Project Managers"
                        value={project.project.projectManagers.projectManagers}
                        margin="normal"
                        variant="outlined"
                    />}
                    <TextField
                        label="Principal Investigators"
                        value={project.project.principalInvestigators.principalInvestigator}
                        margin="normal"
                        variant="outlined"
                    />
                    {project.project.coInvestigators && <TextField
                        label="Co-Investigators"
                        value={project.project.coInvestigators.coInvestigator}
                        margin="normal"
                        variant="outlined"
                    />}
                </CardContent>
            </Card>
        );
    }
}

ProjectPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProjectPanel);