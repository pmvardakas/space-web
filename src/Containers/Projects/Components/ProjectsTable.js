import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../Projects.css.js';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';

import ProjectsTableHead from './ProjectsTableHead.js';
import ProjectsTableBody from './ProjectsTableBody.js';
import ProjectsTableFooter from './ProjectsTableFooter.js';
import ProjectPanel from './ProjectPanel.js';

const cols = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'lastUpdated', numeric: false, disablePadding: false, label: 'Last Update (YYYY-MM-DD)' },
];

class ProjectsTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'id',
            selected: 0,
            rows: [],
            page: 0,
            rowsPerPage: 5,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.hydrateStateWithSessionStorage();
    }

    componentDidMount() {
        if (this.state.rows.length == 0) {
            axios.get("http://192.168.0.4:8082/projects")
                .then(response => {
                    this.setState({
                        rows: response.data
                    });
                });
        }

        window.addEventListener(
            "beforeunload",
            this.saveStateToSessionStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToSessionStorage.bind(this)
        );

        this.saveStateToSessionStorage();
    }

    hydrateStateWithSessionStorage() {
        for (let key in this.state) {
            if (sessionStorage.hasOwnProperty(key)) {
                let value = sessionStorage.getItem(key);

                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToSessionStorage() {
        for (let key in this.state) {
            sessionStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    handleClick = (event, id) => {
        this.setState({ selected: id });
    };

    render() {
        const { classes } = this.props;
        const { rows, order, orderBy, rowsPerPage, page, selected } = this.state;

        let emptyRows = 0;
        let projects = [];

        if (rows.projects) {
            projects = rows.projects;
            emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        } else {
            emptyRows = rowsPerPage;
        }

        return (
            <Grid container className={classes.grid_flex_section}>
                <Grid item className={classes.grid_static_col_scroll} >
                    <Table classes={{ root: classes.table_root }} aria-labelledby="tableTitle">
                        <ProjectsTableHead
                            onRequestSort={this.handleRequestSort}
                            order={order}
                            orderBy={orderBy}
                            rows={cols} />
                        <ProjectsTableBody
                            projects={projects}
                            emptyRows={emptyRows}
                            order={order}
                            orderBy={orderBy}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            handleClick={this.handleClick}
                            selected={this.state.selected} />
                        <ProjectsTableFooter
                            projects={projects}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            handleChangePage={this.handleChangePage}
                            handleChangeRowsPerPage={this.handleChangeRowsPerPage} />
                    </Table>
                </Grid>
                <Grid item className={classes.grid_flex_col_scroll} >
                    <ProjectPanel
                        id={selected} />
                </Grid>
            </Grid>
        );
    }
}

ProjectsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsTable);
