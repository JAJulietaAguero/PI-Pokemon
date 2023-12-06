const { Router } = require('express');
const routeGetPokemons = require('./routeGetPokemons');
const routePostPokemons = require('./routePostPokemons');
const routeGetTypes = require('./routeGetTypes');


const router = Router();

router.use("/pokemons", routeGetPokemons);
router.use("/pokemons", routePostPokemons);
router.use("/types", routeGetTypes);


module.exports = router;
