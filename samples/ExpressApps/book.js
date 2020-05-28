var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    console.log('Time : ', Date.now());
    next();
});

// Route principal
router.get('/', (req, res) => {
    res.send('Page d\'accueil Books');
});

// Route A propos
router.get('/about', (req, res) => {
    res.send('A propos Books');
});


module.exports = router;