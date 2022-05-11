// transaction 정보 저장하는 로직
require('dotenv').config();
const mongoose = require('mongoose');
const transactionSchema = require('../models/transaction');
const {DB_URI} = process.env;        

class transactionService {
    constructor() {
        // mongoose
        // .connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        // .then(async () => console.log('transactionService DB is connecting...'))
        // .catch(e => console.log(e));
    }

    async saveAlltransactions(transactions) {
        let result = await transactionSchema.insertMany(transactions, {ordered: true});
        console.log('Save all new transactions: ', result.length);
        return result;
    }
}

module.exports = transactionService;