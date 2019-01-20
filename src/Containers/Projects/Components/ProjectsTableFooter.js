import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../Projects.css.js';

class ProjectsTableFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, projects, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = this.props;

        return (
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        component="div"
                        count={projects.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        classes={{ select: classes.table_pagination_select }}
                    />
                </TableRow>
            </TableFooter>
        )
    }
}

ProjectsTableFooter.propTypes = {
    classes: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProjectsTableFooter);
