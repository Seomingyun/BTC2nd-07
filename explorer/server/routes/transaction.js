const express = require('express');
const router = express.Router();
const transactionSchema = require('../models/transaction');

// 최근 트랜잭션 중 12개 가져오기(블록 number에 따른 순)
router.get('/', async (req, res) => {
    await transactionSchema.find()
        .sort({"block_num": -1})
        .limit(12)
        .then((result)=>{
            res.send(result);
        })
});

router.get('/:id', async (req, res) => {
    let {id} = req.params;
    await transactionSchema.findOne({"trx.id": id})
        .then((result)=>{
            console.log(result);
            res.send(result);
        });
})

module.exports = router;