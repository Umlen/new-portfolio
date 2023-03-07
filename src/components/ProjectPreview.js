import '../style/project-preveiw.css';

function ProjectPreview(props) {
    const madeWith = props.projectMadeWith.split(' ').map( (tech, key) => (
        <li key={key} className='underline-text project-tech-list-item'>{tech}</li> 
    ));

    return (
        <div className='project-contaier'>
            <img src={props.projectImg} alt={`${props.projectName} screenshot`} className='project-img'></img>
            <div className='project-descr-wrapper'>
                <h3 className='mid-header project-title'>{props.projectName}</h3>
                <p className='project-desrc'>{props.projectDescr}</p>
                <ul className='project-tech-list'>{madeWith}</ul>
                <a href={props.projectCode} target='_blank' className='basic-btn hover-low-opacity project-btns'>Code</a>
                <a href={props.projectDemo} target='_blank' className='basic-btn hover-low-opacity project-btns'>Live</a>
            </div>
        </div>
    );
}

export default ProjectPreview;