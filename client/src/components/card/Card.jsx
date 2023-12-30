import { Link } from 'react-router-dom';

const Card = ({id, name, types, image}) => {
    return (
        <Link to={`/detail/${id}`}>
        <div style={{background: "black", color: "white", borderRadius: "30px", padding: "16px", margin: "16px"}}>
                <h2>{name}</h2>
                <h2>Types: {types?.map(type => {
                    return <p>{type.name}</p>
                })}</h2>
                <img src={image} alt={name}/>
        </div>
        </Link>
    )
}

export default Card;