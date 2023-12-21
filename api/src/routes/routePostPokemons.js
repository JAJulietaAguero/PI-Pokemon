const router = require('express').Router();
const { createPokemon } = require('../controllers/postPokemons');

router.post("/", async(req, res) => {
    const { name, life, attack, defense, speed, height, weight, image, type } = req.body;
    try {
        const createdPokemon = await createPokemon(name, life, attack, defense, speed, height, weight, image, type);
        res.status(200).json(createdPokemon)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
});

module.exports = router;