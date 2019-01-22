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
    card_root: {
        width: '100%',
    },
    card_content_root: {
        height: '100%',
        width: '100%',
    },
    grid_flex_section: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        height: '100%',
        overflow: 'hidden',
        padding: '0 0 0 0',
        backgroundImage: `url("https://api.nasa.gov/images/graphy.png")`,
        backgroundPosition: 'center',
        width: '100%',
    },
    grid_flex_col_scroll: {
        flexGrow: 1,
        overflowY: 'scroll',
        minHeight: '100%',
        width: 'calc(95% - 450px)',
    },
    grid_static_col_scroll: {
        flexGrow: 1,
        overflowY: 'scroll',
        minHeight: '100%',
        width: '450px',
        padding: '0 0 0 0',
        margin: '10px 0 0 0',
    }
});