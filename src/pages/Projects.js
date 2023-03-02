import projectsData from '../projects-data';
import ProjectPreview from '../components/ProjectPreview';

function Projects() {
    const projects = projectsData.slice(0).reverse().map(project => {
        return (
            <ProjectPreview
                key = {project.id}
                projectImg = {project.img}
                projectName = {project.name}
                projectDescr = {project.descr}
                projectCode = {project.code}
                projectDemo = {project.demo}
                projectMadeWith = {project.madeWith}
            />
        );
    });

    return (
        <main className='main-content'>
            <h1 className='large-header'>
                <span className='underline-text'>Projects</span>
            </h1>
            {projects}
        </main>
    );
}

export default Projects;