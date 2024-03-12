import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import iconpoke from '../images/iconpoke.png';

const LandingPage = () => {
    return (
        <div>

            <div>
            <img className={style.image} src={iconpoke}/>
            <div>
            </div>
            <Link to='/home'>
            <button className={style.landingButton}>Start</button>
            </Link>
            </div>

        </div>
    )
}

export default LandingPage;