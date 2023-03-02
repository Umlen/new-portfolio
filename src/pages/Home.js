import projectsData from '../projects-data';
import ProjectPreview from '../components/ProjectPreview';

function Home() {
    const projects = projectsData.slice(-3).map(project => {
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
            <h1 className='large-header'>Hello, I'm Viktor.</h1>
            <h2 className='big-header'>
                I'm a Jr. <span className='underline-animated-text'>Frontend Developer</span>
            </h2>
            <section>
                {/*Small about section*/}
            </section>
            <section>
                <h2 className='big-header'>
                    <span className='underline-text'>Latest Projects</span>
                </h2>
                {projects}
            </section>
        </main>
    );
}

export default Home;