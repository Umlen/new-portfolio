import '../style/contacts.css';

function Contacts() {
    return (
        <main className='main-content'>
            <h1 className='large-header'>
                <span className='underline-animated-text'>Contact me</span>
            </h1>
            <div className='contacts-container'>
                <a href='mailto:victorpatrin@gmail.com' className='basic-link hover-low-opacity contact-link'>
                    victorpatrin@gmail.com
                </a>
                <a href='https://github.com/Umlen' className='basic-link hover-low-opacity contact-link'>
                    GitHub
                </a>
                <a href='https://www.linkedin.com/in/victor-patrin-255899232/' className='basic-link hover-low-opacity contact-link'>
                    LinkedIn
                </a>
                <a href='https://www.frontendmentor.io/profile/Umlen' className='basic-link hover-low-opacity contact-link'>
                    Frontendmentor
                </a>
            </div>
        </main>
    );
}

export default Contacts;