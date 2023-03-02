import { Link } from 'react-router-dom';
import '../style/header.css';
import lightLogo from '../images/logo/light-logo.svg';
import darkLogo from '../images/logo/dark-logo.svg';
import moon from '../images/icons/moon.svg';
import sun from '../images/icons/sun.svg';

function Header(props) {
    return (
        <header className='header'>
            <object 
                type='image/svg+xml' 
                className='logo' 
                title='logo'
                data={props.darkModeOn ? darkLogo : lightLogo} 
            >
            </object>
            <nav className='nav-menu'>
                <Link to='/' className='nav-links'>Home</Link>
                <Link to='/projects' className='nav-links'>Projects</Link>
                <Link to='/contacts' className='nav-links'>Contacts</Link>
            </nav>
            <img 
                alt='' 
                className='theme-toggle-icon' 
                src={props.darkModeOn ? sun : moon} 
                onClick={props.themeToggler}
            >
            </img>
        </header>
    );
}

export default Header;