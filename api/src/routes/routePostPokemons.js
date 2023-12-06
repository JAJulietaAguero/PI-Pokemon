const router = require('express').Router();
const { createPokemon } = require('../controllers/postPokemons');

router.post("/", async(req, res) => {
    const { name, hp, attack, defense, speed, height, weight, image, types } = req.body;
    try {
        const createdPokemon = await createPokemon(name, hp, attack, defense, speed, height, weight, image, types);
        res.status(200).json(createdPokemon)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
});

module.exports = router;