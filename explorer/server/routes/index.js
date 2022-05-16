const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello Adios!');
});

router.use('/block', require('./block'));
router.use('/transaction', require('./transaction'));

module.exports = router;