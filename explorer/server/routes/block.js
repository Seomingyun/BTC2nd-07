const express = require('express');
const router = express.Router();
const blockSchema = require('../models/block');

// 최근 블록 중 12개 가져오기
router.get('/', async (req, res) => {
    await blockSchema.find()
        .sort({_id: -1})
        .limit(12)
        .then((result)=>{
            res.send(result);
        });
});

router.get('/:id', async (req, res) => {
    let {id} = req.params;
    await blockSchema.findOne({_id: id})
        .then((result)=>{
            console.log(result);
            res.send(result);
        });
})

module.exports = router;