const router = require('express').Router();
const { getTypes } = require('../controllers/getTypes');

router.get("/", async (req, res) => {
    try {
        const newType = await getTypes();
        res.status(200).json(newType);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

module.exports = router;