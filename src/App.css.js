export const styles = theme => ({
    grid_flex_section: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        overflow: 'hidden',
        padding: '50px 0 0 0'
    },
    grid_flex_col_scroll: {
        flexGrow: 1,
        overflowY: 'scroll',
        minGeight: '100vh',
        width: 'calc(100vw - 216px)'
    },
    grid_static_col_scroll: {
        flexGrow: 1,
        overflow: 'hidden',
        minHeight: '100vh',
        width: '216px'
    }
});