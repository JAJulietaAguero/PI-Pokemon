const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { pokemonsAPI } = require('../utils/index');

const pokemonId = async (id, source) => {
    const pokemon = source === "API" ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data : 
    (await Pokemon.findOne({
        where: {id},
        include: [{
            model: Type
        }]
    }));

    if (source === "API") {
        return pokemonsAPI(pokemon);
    } else {
        return pokemon
    }
}

module.exports = {
    pokemonId
}