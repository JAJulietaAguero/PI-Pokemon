const { Pokemon } = require('../db');

const createPokemon = async (name, life, attack, defense, speed, height, weight, image, types) => {
    console.log(types)
    const  pokemon = await Pokemon.create({
    
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight, 
            image,
            types
        }
    );


    await pokemon.setTypes(types);

    return pokemon;
}; 


module.exports = {
    createPokemon
}