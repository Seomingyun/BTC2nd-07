// transaction 정보 저장하는 로직
require('dotenv').config();
const transactionSchema = require('../models/transaction');      

class transactionService {
    async saveAlltransactions(transactions) {
        let result = await transactionSchema.insertMany(transactions, {ordered: true});
        console.log('Save all new transactions: ', result.length);
        return result;
    }
}

module.exports = transactionService;