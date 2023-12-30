import React from 'react';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../../redux/actions';
import Loader from '../loader/Loader';

const pokemonsPerPage = 12;

const Pagination = () => {
    const dispatch = useDispatch();
    const { allPokemons } = useSelector(state => state);
    const { loading } = useSelector(state => state);

    const totalPages = Math.ceil(allPokemons.length / pokemonsPerPage);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])


    let pokemonsToDisplay = [];
    const startPokemons = current * pokemonsPerPage;
    const endPokemons = startPokemons + pokemonsPerPage;

    if (allPokemons.length) {
       pokemonsToDisplay= allPokemons.slice(startPokemons, endPokemons);
    }
    

    const nextHandler = () => {
        if (current < totalPages -1) {
            setCurrent(current + 1)
        }
    };

    const prevHandler = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    };

    return (
        <div>
            { loading ? <Loader /> : (<div>

                {
                pokemonsToDisplay?.map((pokemon) => {
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
                 <button onClick={prevHandler}>Previous</button>

                  <span>{current + 1}</span>

                <button onClick={nextHandler}>Next</button>
            </div>) }

        </div>
    )
}

export default Pagination;