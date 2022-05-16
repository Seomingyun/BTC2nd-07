const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    _id: {type: Number},
    timestamp: {type: String}, // Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss
    producer: {type: String}, // block producer name
    confirmed: {type: Number}, // number of prior blocks confirmed by this block producer in current schedule
    previous: {type: String}, // previous block id
    transaction_mroot: {type: String}, 
    action_mroot: {type: String},
    schedule_version: {type: Number}, // number of times producer schedule has changed since genesis
    new_producers: {type: mongoose.Schema.Types.Mixed}, // nullable
    header_extensions: {type: Array},
    new_protocol_features: {type: Array},
    producer_signature: {type: String}, // base58 encoded EOSIO cryptographic signature
    block_extensions: {type: Array},
    id: {type: String},
    block_num: {type: Number}, // height of this block in the chain
    ref_block_prefix: {type: Number} // 32-bit portion of block ID
},{
    timestamps: false,
    _id: false
});

module.exports = mongoose.model('Block', blockSchema);