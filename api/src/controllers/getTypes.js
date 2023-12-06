const axios = require('axios');
const { Type } = require('../db');

const getTypes = async () => {
    const typesAPI = (await axios.get(`https://pokeapi.co/api/v2/type`)).data.results;
    typesAPI.forEach(async type => {
        await Type.findOrCreate({
            where: {
                id: type.type.slot,
                name: type.type.name
            }
        })
    });

    const infoMapeada = typesAPI.map(type => {
        return {
            id: type.types.slot,
            name: type.types.name
        }
    });

    return infoMapeada;
}

module.exports = {
    getTypes
}