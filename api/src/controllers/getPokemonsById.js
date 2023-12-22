const axios = require('axios');
const { Pokemon, Type } = require('../db');

const pokemonAPI = async (id) => {
    let idAPI;

    const API = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
           return idAPI = {
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
            }
}

const pokemonDB = async (id) => {
    
   return await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ['name']
            }
        })
 
}

module.exports = {
    pokemonAPI,
    pokemonDB
}