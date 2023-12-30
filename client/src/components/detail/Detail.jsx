import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail, cleanDetail } from '../../redux/actions'; 
import Button from '../button/Button';

const Detail = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { pokemonDetail } = useSelector(state => state);

    React.useEffect(() => {
        dispatch(getPokemonDetail(params?.id))

        return () => dispatch(cleanDetail());
    }, [dispatch, params?.id])

    return (
        <div>
            <h2>{pokemonDetail?.name}</h2>
            <p><b>ID:</b> {pokemonDetail?.id}</p>
            <p><b>Life:</b> {pokemonDetail?.life}</p>
            <p><b>Attack:</b> {pokemonDetail?.attack}</p>
            <p><b>Defense:</b> {pokemonDetail?.defense}</p>
            <p><b>Speed:</b> {pokemonDetail?.speed}</p>
            <p><b>Types:</b> {pokemonDetail.Types?.map(el =>  <p key={el.name}>{el.name}</p> )}</p>
            <img src={pokemonDetail?.image} alt={pokemonDetail?.name}/>
            <Button path="/home" text="X"/>
        </div>
    )
}

export default Detail;