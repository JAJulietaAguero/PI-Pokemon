const axios = require('axios');
const { Type } = require('../db');


const getTypes = async () => {
    const typesAPI = await axios.get(`https://pokeapi.co/api/v2/type`)
    .then(async (data) => {
        return data.data.results;
    })
    .then((data) => {
        return Promise.all(data.map((res) => axios.get(res.url)));
    })
    .then((data) => {
        return data.map((res) => res.data)
    })

    typesAPI.forEach(async type => {
        await Type.findOrCreate({
            where: {
                id: type.id,
                name: type.name
            }
        })
      });
      
  let infoMapeada = typesAPI.map((type) => {
    return {
        id: type.id,
        name: type.name
    }
  })
  
  return infoMapeada;
}

module.exports = {
    getTypes
}