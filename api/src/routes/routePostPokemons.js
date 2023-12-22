const router = require('express').Router();
const { createPokemon } = require('../controllers/postPokemons');

router.post("/", async(req, res) => {
    try {
        const { name, life, attack, defense, speed, height, weight, image, types } = req.body;

        const createdPokemon = await createPokemon(name, life, attack, defense, speed, height, weight, image, types);
        res.status(200).json(createdPokemon)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
});

module.exports = router;