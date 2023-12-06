const axios = require('axios');
const { Pokemon } = require('../db');
const { pokemonsAPI } = require('../utils/index');

const pokemonName = async (name) => {
    const pokemosDB = await Pokemon.findAll({
        where: {
            name: name
        },
        limit: 12
    });

    const infoAPI = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data.results;

    let infoMapeada = [];

    if (infoAPI.length !=0 ) {
        infoMapeada = pokemonsAPI(infoAPI)
    }

    const infoResults = [...infoMapeada, ...pokemosDB];

    if (infoResults.length === 0) {
        return { error: error.message}
    }
    return infoResults.slice(0, 12);
}

module.exports = {
    pokemonName
}