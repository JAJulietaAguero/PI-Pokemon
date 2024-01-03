import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id, name, types, image}) => {
    return (
        <Link to={`/detail/${id}`}>
        <div className={style.card}>
                <h2 className={style.cardName}>{name}</h2>
                <img src={image} alt={name}/>
                <div className={style.cardContainerTypes}>{types?.map(type => {
                    return <p className={style.cardTypes}>{type.name}</p>
                })}</div>
        </div>
        </Link>
    )
}

export default Card;