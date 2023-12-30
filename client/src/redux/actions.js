import axios from 'axios';
import { GET_ALL_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL,
    CLEAN_DETAIL, 
    GET_TYPES, 
    FILTER_BY, 
    ORDER_BY,
    LOADING } from './actions-types';


const URL = 'http://localhost:3001/pokemons';
const URL_TYPES = 'http://localhost:3001/types';
const URL_POST = 'http://localhost:3001/pokemons';

export const getAllPokemons = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING});
        try {
            const { data } = await axios(URL);
        
            return dispatch({ type: GET_ALL_POKEMONS, payload: data});
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_ALL_POKEMONS, payload: []});
        }
    }
};

export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}/${id}`);
            return dispatch({ type: GET_POKEMON_DETAIL, payload: data })
        } catch (error) {
            console.log(error);
        }
    }
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL}
};

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        dispatch({ type: LOADING});
        try {
            const { data } = await axios(`${URL}?name=${name}`);
          dispatch({ type: GET_POKEMON_BY_NAME, payload: data })
        } catch (error) {
            console.log("No pokemon with that name was found");
            dispatch({ type: GET_POKEMON_BY_NAME, payload: [] })
        }
    }
};

export const getTypes = (form) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(URL_TYPES);
            return dispatch({ type: GET_TYPES, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
};

export const orderBy = (order) => {
    return { type: ORDER_BY, payload: order }
};

export const filterBy = (order) => {
    return { type: FILTER_BY, payload: order}
};

export const createPokemon = (body) => {
    return async () => {
          await axios.post(URL_POST, body);
    }
};