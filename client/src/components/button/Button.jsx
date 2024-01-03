import style from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ path, text }) => {
    return (
        <Link to={path}>
            <button className={style.button}>
                {text}
            </button>
        </Link>
    )
}

export default Button;