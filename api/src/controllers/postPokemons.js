const { Pokemon } = require('../db');

const createPokemon = async (name, life, attack, defense, speed, height, weight, image) => {
    const pokemon = await Pokemon.create({ name: name, life: life, attack: attack, defense: defense, speed: speed, height: height, weight: weight, image: image});

    return pokemon
}; 


module.exports = {
    createPokemon
}