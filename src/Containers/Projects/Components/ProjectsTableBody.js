import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { stableSort, getSorting } from '../../../Utilities/Utilities.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../Projects.css.js';

class ProjectsTableBody extends React.Component {

    constructor(props) {
        super(props);
    }

    isSelected = id => this.props.selected == id;

    render() {
        const { classes, projects, emptyRows, order, orderBy, rowsPerPage, page, handleClick, selected } = this.props;

        return (
            <TableBody>
                {stableSort(projects, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                        const isSelected = this.isSelected(n.id);
                        return (
                            <TableRow
                                hover
                                onClick={event => handleClick(event, n.id)}
                                role="checkbox"
                                aria-checked={isSelected}
                                tabIndex={-1}
                                key={n.id}
                                selected={isSelected}>
                                <TableCell classes={{ root: classes.table_cell_root_col1 }} component="th" scope="row" padding="none">
                                    {n.id}
                                </TableCell>
                                <TableCell classes={{ root: classes.table_cell_root_col2 }} align="right">{n.lastUpdated}</TableCell>
                            </TableRow>
                        );
                    })}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>
        )
    }
}

ProjectsTableBody.propTypes = {
    classes: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    emptyRows: PropTypes.number.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProjectsTableBody);
