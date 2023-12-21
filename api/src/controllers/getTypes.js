const axios = require('axios');
const { Type } = require('../db');

const getTypes = async () => {
    const typesAPI = (await axios.get(`https://pokeapi.co/api/v2/type`)).data.results;
    typesAPI.forEach(async elem => {
        await Type.findOrCreate({
            where: {
                name: elem.name
            }
        })
    });

    const infoMapeada = typesAPI.map((elem) => {
        return {
            id: elem.url.id,
            name: elem.name
        }
    });

    return infoMapeada;
}

module.exports = {
    getTypes
}