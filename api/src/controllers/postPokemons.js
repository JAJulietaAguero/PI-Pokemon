const { Pokemon } = require('../db');

const createPokemon = async (name, hp, attack, defense, speed, height, weight, image) => {
    const pokemon = await Pokemon.create({ name: name, hp: hp, attack: attack, defense: defense, speed: speed, height: height, weight: weight, image: image});

    await pokemon.setType(types)

    return pokemon
}; 


module.exports = {
    createPokemon
}