const axios = require('axios');
const { Pokemon, Type } = require('../db');

//Pokemons API
const pokemonsAPI = async () => {
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=72`)
   .then(async (data) => {
    return data.data.results;
   })
   .then((data) => {
    return Promise.all(data.map((res) => axios.get(res.url)));
   })
   .then((data) => {
    return data.map((res) => res.data);
   });



   let arrayPokemonsApi = response.map((pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.name,
        life: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.other.dream_world.front_default,
        Types: pokemon.types.map((elem) => {
            return {
                name: elem.type.name
            }
        })
    }
})
return arrayPokemonsApi;
}

//Pokemos DB
const pokemonsDB = async () => {
    try {
        const results = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return results;
    } catch (error) {
        console.log(error)
    }
}

//Junto los pokemons de la API y la DB
const allPokemons = async () => {
    const ApiInfo = await pokemonsAPI();
    const DBInfo = await pokemonsDB();
    const TotalInfo = [...DBInfo,...ApiInfo, ];
    return TotalInfo;
}




module.exports = {
    allPokemons
}

