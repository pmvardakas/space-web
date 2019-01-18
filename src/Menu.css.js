export const styles = theme => ({
    root: {
        display: 'flex',
    },
    appbar_root: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#262626',
        height: '50px',
    },
    appbar_typography: {
        color: '#DFDFDF',
        padding: '0 0 15px 0',
    },
    drawer: {
        backgroundColor: '#DFDFDF',
    },
    drawer_paper: {
        margin: '50px 0 0 0',
    },
    divider_root: {
        backgroundColor: '#DFDFDF',
        height: '2px',
    },
    divider_middle: {
        backgroundColor: '#DFDFDF',
    },
    list_root: {
        background: '#262626',
        borderStyle: 'solid',
        borderWidth: 3,
        margin: '0 0 20 0',
        padding: '0 0 0 0',
        borderColor: '#262626',
        height: '100%',
        color: 'white',
        width: '216px',
    },
    listitem_root: {
        margin: 0,
        padding: '20 0 20 0',
        background: '#262626',
    },
    listitemtext_root: {
        padding: 0,
        margin: 0,
        textAlign: 'center',
    },
    listitemtext_primary: {
        color: 'white',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    typography: {
        color: '#DFDFDF',
        padding: '0 0 15px 0',
    },
    toolbar: theme.mixins.toolbar,
});