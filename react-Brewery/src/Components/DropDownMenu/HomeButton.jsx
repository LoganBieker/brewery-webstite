import '@/Components/DropDownMenu/DropDownMenu.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'

export default function HomeButton(prop) {

    return (
        <button className='home-button-container'>
            <Link to={prop.path}>
                <img className="home-button-image" src='/brewLogo.png' alt='Brew Logo'>
                </img>
            </Link>
        </button>
    );
}