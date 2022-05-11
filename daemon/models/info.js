const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    last_update_block_num: {type: Number},
}, {
    timestamps: {updatedAt: 'last_update_time', createdAt: false}
});

module.exports = mongoose.model('Info', infoSchema);