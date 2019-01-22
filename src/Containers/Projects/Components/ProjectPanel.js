import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../Projects.css.js';
import { TextField, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class ProjectPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            axios.get(`http://192.168.0.4:8082/projects/project?id=${this.props.id}`)
                .then(response => {
                    this.setState({
                        project: response.data
                    });
                });
        }
    }

    componentDidMount() {
        axios.get(`http://192.168.0.4:8082/projects/project?id=${this.props.id}`)
            .then(response => {
                this.setState({
                    project: response.data
                });
            });
    }

    isObject(val) {
        return val instanceof Object;
    }

    isArray(val) {
        return val instanceof Array;
    }

    render() {
        const { classes } = this.props;
        const { project } = this.state;

        if (project === null) {
            return null;
        }

        var data = project.project;

        return (
            <Paper classes={{ root: classes.card_root }}>
                <TextField
                    label="Project Title"
                    value={data.title}
                    margin="normal"
                    fullWidth="true"
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Description"
                    value={data.description}
                    margin="normal"
                    fullWidth="true"
                    multiline
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Benefits"
                    value={data.benefits}
                    margin="normal"
                    fullWidth="true"
                    multiline
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Status"
                    value={data.status}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Acronym"
                    value={data.acronym}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Start Date"
                    value={data.startDate}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="End Date"
                    value={data.endDate}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Last Updated"
                    value={data.lastUpdated}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Executive Summary"
                    value={data.executiveSummary}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Website"
                    value={data.website}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Program Directors"
                    value={data.programDirectors.programDirector.map(function (director, i) {
                        return director;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <TextField
                    label="Program Managers"
                    value={data.programManagers.programManager.map(function (manager, i) {
                        return manager;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <TextField
                    label="Project Managers"
                    value={data.projectManagers.projectManager.map(function (manager, i) {
                        return manager;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Principal Investigators"
                    value={data.principalInvestigators.principalInvestigator.map(function (pi, i) {
                        return pi;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <TextField
                    label="Co-Investigators"
                    value={data.coInvestigators.coInvestigator.map(function (ci, i) {
                        return ci;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Work Locations"
                    value={data.workLocations.workLocation.map(function (location, i) {
                        return location;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Lead Organization"
                    value={data.leadOrganization.acronym + ' - ' + data.leadOrganization.name + '\n' + data.leadOrganization.city + ', ' + data.leadOrganization.state}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <br />

                <TextField
                    label="Supporting Organizations"
                    value={data.supportingOrganizations.organization.map(function (org, i) {
                        return org.acronym + ' - ' + org.name + ' in ' + org.city + ', ' + org.state + '\n';
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <TextField
                    label="Co-Funders"
                    value={data.coFundingPartners.organization.map(function (org, i) {
                        return org.acronym + ' - ' + org.name + ' in ' + org.city + ', ' + org.state + '\n';
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <TextField
                    label="Destinations"
                    value={data.destinations.destinations.map(function (destination, i) {
                        return destination;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Supported Mission Type"
                    value={data.supportedMissionType}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Responsible Program"
                    value={data.responsibleProgram}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Office or Directorate"
                    value={data.responsibleMissionDirectorateOrOffice}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Technology Maturity [Start, Current, End]"
                    value={'[' + data.technologyMaturityStart + ', ' + data.technologyMaturityCurrent + ', ' + data.technologyMaturityEnd + ']'}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    label="Primary TAs"
                    value={data.primaryTas.technologyAreas.map(function (ta, i) {
                        return ta.code + ' - ' + ta.name;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <TextField
                    label="Additional TAs"
                    value={data.additionalTas.technologyAreas.map(function (ta, i) {
                        return ta.code + ' - ' + ta.name;
                    })}
                    margin="normal"
                    multiline
                    variant="outlined"
                />
                <br />
                {data.library.libraryItem.map(function (item, i) {
                    return <Paper classes={{ root: classes.card_root }}>
                        <Typography variant="subtitle1">
                            File: {item.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            Published by {item.publishedBy} on {item.publishedDate}, completed {item.completionDate}.
                            </Typography>
                        <Typography variant="subtitle1">
                            {item.description}
                        </Typography>
                        <Typography variant="subtitle1">
                            Retrieved from {item.externalUrl} as {item.type}.
                            </Typography>
                        {item.files.map(function (file, i) {
                            return <div><Typography variant="subtitle1">
                                File Size: {file.size}
                            </Typography>
                                <Typography variant="subtitle1">
                                    Location: {file.url}
                                </Typography>
                            </div>
                        })}
                    </Paper>
                })}
            </Paper>
        );
    }
}

ProjectPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProjectPanel);