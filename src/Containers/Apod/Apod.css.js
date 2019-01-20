export const styles = theme => ({
    content_div_style: {
        margin: '0 0 50px 0',
        backgroundImage: `url("https://api.nasa.gov/images/graphy.png")`,
        backgroundPosition: 'center'
    },
    paper_root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center'
    },
    image_div_style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_typography: {
        textAlign: 'center',
        padding: '25px 0 0 10px'
    },
    image_style: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image_reference_style: {
        textAlign: 'left',
        padding: '5px 0 0 0'
    },
    source_div_style: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        padding: '10px 0 5px 0'
    },
    source_typography: {
        textAlign: 'left',
        padding: '0 0 0 10px'
    },
    explanation_div_style: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        padding: '5px 0 5px 0'
    },
    explanation_typography: {
        textAlign: 'left',
        padding: '0 0 0 10px'
    }
});