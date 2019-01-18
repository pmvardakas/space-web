export const styles = theme => ({
    content_div_style: {
        margin: '0 0 0 0 !important',
        backgroundImage: `url("https://api.nasa.gov/images/graphy.png")`,
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
    },
    table_div_style: {
        margin: '10px 0 0 10px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left'
    },
    table_root: {
        background: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 'auto',
        borderColor: '#262626',
    },
    table_pagination_select: {
        width: `calc(100% - 28px)`,
    },
    table_cell_root_col1: {
        width: '25%',
        textAlign: 'center',
    },
    table_cell_root_col2: {
        width: '75%',
        textAlign: 'center',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});