const axios = require('axios');
const { Pokemon, Type } = require('../db');

const pokemonName = async (name) => {
    let infoMapeada = [];
    const pokemosDB = await Pokemon.findAll({
        where: {
            name: name
        },
        include: {
            model: Type,
            attributes: ['name']
        },
        limit: 12
    });

try {
    const API = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        infoMapeada=[{
            id: API.data.id,
            name: API.data.name,
            life: API.data.stats[0].base_stat,
            attack: API.data.stats[1].base_stat,
            defense: API.data.stats[2].base_stat,
            speed: API.data.stats[5].base_stat,
            height: API.data.height,
            weight: API.data.weight,
            image: API.data.sprites.front_default,
            types: API.data.types.map((elem) => {
                return {
                    name: elem.type.name
                }
            })
        } ]

} catch (error) {
    console.warn(`Error fetching data: ${error.message}`);
}


    const infoResults = [...infoMapeada, ...pokemosDB];
    console.log(infoResults)
    if (infoResults.length === 0) {
        return { error: `The pokemon was not found ${name}`}
    }
    return infoResults.slice(0, 12);
}

module.exports = {
    pokemonName
}