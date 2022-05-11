// block 정보 저장하는 로직
require('dotenv').config();
const mongoose = require('mongoose');
const blockSchema = require('../models/block');
const {DB_URI} = process.env;        

class blockService {
    constructor() {
        // mongoose
        // .connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        // .then(async () => console.log('blockService DB is connecting...'))
        // .catch(e => console.log(e));
    }

    async saveAllBlocks(blocks) {
        blocks = blocks.map((block) => {
            block['_id'] = block['block_num'];
            return block;
        })

        let result = await blockSchema.insertMany(blocks, {ordered: true});
        console.log('Save all new blocks: ', result.length);
        return result;
    }
}

module.exports = blockService;