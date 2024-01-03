import style from './Pagination.module.css';
import React from 'react';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../../redux/actions';
import Loader from '../loader/Loader';
import NotFound from '../notFound/NotFound';
import Filter from '../filter/Filter';

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
            <div>
            <Filter />
             <button className={style.paginationButton}  onClick={prevHandler}>Previous</button>

                <span>{current + 1}</span>

            <button className={style.paginationButton}  onClick={nextHandler}>Next</button>
        </div>
        <div className={style.pagination}>
            { loading ? <Loader /> :

                
                pokemonsToDisplay.length?pokemonsToDisplay.map((pokemon) => {
                    return (
                        <Card 
                        key = {pokemon?.id}
                        id = {pokemon?.id}
                        name = {pokemon?.name}
                        types = {pokemon?.Types}
                        image = {pokemon?.image}
                        />
                    )
                }):
                <NotFound />
                
            
                 
             }

        
        </div>

            <div>
             <button className={style.paginationButton}  onClick={prevHandler}>Previous</button>

               <span>{current + 1}</span>

            <button className={style.paginationButton}  onClick={nextHandler}>Next</button>
        </div>
</div>
    )
}

export default Pagination;