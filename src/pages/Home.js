import { Link } from 'react-router-dom';
import '../style/home.css';
import projectsData from '../projects-data';
import ProjectPreview from '../components/ProjectPreview';

function Home() {
    const projects = projectsData.slice(-3).reverse().map(project => {
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
            <section className='home-section'>
                {/*Small about section*/}
            </section>
            <section className='home-section'>
                <h2 className='big-header'>
                    <span className='underline-text'>Latest Projects</span>
                </h2>
                {projects}
                <Link to='/projects' className='basic-btn all-projects-btn hover-low-opacity'>
                    View all projects
                </Link>
            </section>
            <section className='home-section email-section'>
                <h2 className='mid-header'>
                    <span className='underline-text'>Email me</span>
                </h2>
                <a className='basic-link hover-low-opacity' href='mailto:victorpatrin@gmail.com'>
                    victorpatrin@gmail.com
                </a>
            </section>
        </main>
    );
}

export default Home;