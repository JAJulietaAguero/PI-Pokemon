const router = require('express').Router();
const { allPokemons } = require('../controllers/getPokemons');


//Pokemons por nombre
router.get("/", async(req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const pokemon = await pokemonName(name);
            res.status(200).json(pokemon)
        } else {
            const allPokemones = await allPokemons();
            res.status(200).json(allPokemones);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

//Pokemons por ID
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "DB" : "API" //Hago un ternario para verificar si el ID que recibo viene de la API o de la DB
    try {
        const foundPokemon = await pokemonId(id, source);
        res.status(200).json(foundPokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;