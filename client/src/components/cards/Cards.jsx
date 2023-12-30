import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../../redux/actions';
import Card from '../card/Card';

const Cards = () => {
    const dispatch = useDispatch();
    const { allPokemons } = useSelector((state) => state);

    React.useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch])
    return (
        <div>
            {
                allPokemons?.map((pokemon) => {
                    return (
                        <Card
                        key = {pokemon?.id}
                        id = {pokemon?.id}
                        name = {pokemon?.name}
                        types = {pokemon?.Types}
                        image = {pokemon?.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;