const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    block_num: {type: Number},
    status: {type: String},
    cpu_usage_us: {type: Number},
    net_usage_works: {type: Number},
    trx: {type: mongoose.Schema.Types.Mixed}
}, {
    timestamps: false
});

module.exports = mongoose.model('Transaction', transactionSchema);