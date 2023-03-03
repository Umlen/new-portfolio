import projectsData from '../projects-data';
import ProjectPreview from '../components/ProjectPreview';
import { useEffect } from 'react';

function Projects() {
    useEffect( () => {
        document.documentElement.scrollTo(0, 0); 
    });
    
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
                <span className='underline-animated-text'>Projects</span>
            </h1>
            {projects}
        </main>
    );
}

export default Projects;