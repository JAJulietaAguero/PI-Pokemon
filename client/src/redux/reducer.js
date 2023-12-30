import { GET_ALL_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL,
    CLEAN_DETAIL, 
    GET_TYPES, 
    FILTER_BY, 
    ORDER_BY,
    LOADING } from './actions-types';

const initialState = {
    allPokemons: [],
    backUpPokemons: [],
    pokemonDetail: {},
    types: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_POKEMONS:
            console.log(state.loading)
            return {
                ...state,
                loading: false,
                allPokemons: action.payload, //Cargo todos los pokemons en dos estados diferentes (allPokemons y backUpPokemons)
                backUpPokemons: action.payload 
            }
        
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                loading: false,
                allPokemons: action.payload
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case FILTER_BY:
            if(action.payload === 'default') {
                return {
                    ...state,
                    allPokemons: state.allPokemons
                }
            }
            if (action.payload === 'DB') {
                return {
                    ...state,
                    allPokemons: [...state.backUpPokemons].filter((pokemon) => (typeof pokemon.id === 'string')) //Aplico un filter en la copia del estado backUpPokemons ([...state.backUpPokemons])
                }                                                                                                //evitando modificar la copia original que tiene cargada todos los pokemons
            }
            if(action.payload === 'API') {
                return {
                    ...state,
                    allPokemons: [...state.backUpPokemons].filter((pokemon) => (typeof pokemon.id === 'number'))
                }
            } else {
                return {
                    ...state,
                    allPokemons: [...state.backUpPokemons].filter((pokemon) => {
                        if(pokemon.Types) {
                            for (let i=0; i < pokemon.Types.length; i++) {
                                if (pokemon.Types[i].name=== action.payload) {
                                    return true
                                }
                            }
                        }
                    })
                }
            }

        case ORDER_BY:
            if (action.payload === 'A-Z') {
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((prev, next) => {
                        if (prev.name > next.name) return 1
                        if (prev.name < next.name) return -1
                        return 0
                    })
                }
            }
            if (action.payload === 'Z-A') {
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((prev, next) => {
                        if (prev.name > next.name) return -1
                        if (prev.name < next.name) return 1
                        return 0
                    })
                }
            }
            if (action.payload === 'D') {
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((prev, next) => prev.attack - next.attack)
                }
            }
            if (action.payload === 'A') {
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((prev, next) => next.attack - prev.attack)
                }
            } else {
                return {
                    ...state,
                    allPokemons: state.allPokemons
                }
            }

            case LOADING: 
            return {
                ...state,
                loading: true
            }

        default:
            return {...state}
    }
}

export default reducer;