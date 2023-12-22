const router = require('express').Router();
const { pokemonName } = require('../controllers/getPokemonsByName');
const { pokemonAPI, pokemonDB } = require('../controllers/getPokemonsById');
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
        res.status(404).json({ error: `No Pokemon found with the name ${name}` })
    }
});

//Pokemons por ID
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "DB" : "API" //Hago un ternario para verificar si el ID que recibo viene de la API o de la DB
    try {
        if(source === 'API') {
            const foundPokemonAPI = await pokemonAPI(id, source);

                res.status(200).json(foundPokemonAPI)
        }
        
        if(source === 'DB') {
            const foundPokemonDB = await pokemonDB(id);

               res.status(200).json(foundPokemonDB)
        }
        
    } catch (error) {
        res.status(400).json({ error: "No Pokemon found" })
    }
});

module.exports = router;