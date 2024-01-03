import style from './Detail.module.css';
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
        <div className={style.detail}>
         
            <div className={style.detailContainer}>
            <img src={pokemonDetail?.image} alt={pokemonDetail?.name}/>
            <div className={style.box}>
                 
            <h2 className={style.detailName}>{pokemonDetail?.name}</h2>
            <div className={style.boxDetail}>
            <p><b>ID:</b> {pokemonDetail?.id}</p>
            <p><b>Life:</b> {pokemonDetail?.life}</p>
            <p><b>Attack:</b> {pokemonDetail?.attack}</p>
            <p><b>Defense:</b> {pokemonDetail?.defense}</p>
            <p><b>Speed:</b> {pokemonDetail?.speed}</p>
            <p><b>Types:</b> {pokemonDetail.Types?.map(el =>  <p key={el.name}>{el.name}</p> )}</p>
            </div>
            </div>
    
            </div>

           
            <Button  path="/home" text="Back" className={style.detailButton}/>
            
        </div>
    )
}

export default Detail;