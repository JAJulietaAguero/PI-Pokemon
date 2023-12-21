const axios = require('axios');
const { Pokemon } = require('../db');

const pokemonName = async (name) => {
    let infoMapeada;
    const pokemosDB = await Pokemon.findAll({
        where: {
            name: name
        },
        limit: 12
    });

console.log(pokemosDB)
    const API = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//VALIDAR SI HAY INFO EN CONST API
    infoMapeada = [{
        id: API.data.id,
        name: API.data.name,
        life: API.data.stats[0].base_stat,
        attack: API.data.stats[1].base_stat,
        defense: API.data.stats[2].base_stat,
        speed: API.data.stats[5].base_stat,
        height: API.data.height,
        weight: API.data.weight,
        image: API.data.sprites.front_default,
        type: API.data.types.map((elem) => {
            return {
                id: elem.slot,
                name: elem.type.name
            }
        })
    }]
//1er escenario:
//               el name se encuentra en la api y la db =  inforsults : [pokemondb] + [pokemonApi]
//2do escenario:
//               el name se encuentra en la db y no en la api = 404 por api externa 
//3er escenario:
//               el name no se encuentra en la db y si se encuentra en la api = inforsults : [] + [pokemonApi]

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