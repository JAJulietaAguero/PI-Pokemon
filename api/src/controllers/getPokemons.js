const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { pokemonsAPI } = require('../utils/index');


const allPokemons = async () => {

    let arrayPokemonsApi = [];

    
   await axios.get(`https://pokeapi.co/api/v2/pokemon`)
   .then(async (response) => {
    arrayResults = response.data.results;
    const pokemonsInfo = [];
    arrayResults.map((pokemon) => pokemonsInfo.push(axios.get(pokemon.url)));

    await Promise.all(pokemonsInfo)
    .then((pokemons) => {
        arrayPokemonsApi = pokemons.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                image: pokemon.sprites.front_default,
                types: pokemon.types.map((elem) => {
                    return {
                        id: elem.slot,
                        name: elem.type.name
                    }
                })
            }
        }
        )
    })
   }) 
   
   

    const pokemonsDB = await Pokemon.findAll({
        include: {
            model: Type
        }
    });

    return [...arrayPokemonsApi, ...pokemonsDB]
}


module.exports = {
    allPokemons
}