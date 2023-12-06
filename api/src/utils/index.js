const pokemonsAPI = (pokemons) => {

    if (pokemons.length) {
        return pokemons.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                image: pokemon.sprites.front_default,
                types: pokemon.types.map((elem) => {
                    return {
                        id: elem.slot,
                        name: elem.type.name
                    }
                })
            }
        })
    }
}

module.exports = {
    pokemonsAPI
}