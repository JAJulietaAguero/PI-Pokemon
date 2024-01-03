import style from './LandingPage.module.css';
import Button from "../button/Button";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={style.landingContainer}>

            <div >
            <Link to='/home'>
            <button className={style.landingButton}>Start</button>
            </Link>
            </div>

        </div>
    )
}

export default LandingPage;