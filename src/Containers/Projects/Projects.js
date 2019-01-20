import React from 'react';
import ProjectsTable from './Components/ProjectsTable.js';

class Projects extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProjectsTable />
        );
    }
}

export default Projects;