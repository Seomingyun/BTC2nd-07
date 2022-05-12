// block 정보 저장하는 로직
require('dotenv').config();
const blockSchema = require('../models/block');  

class blockService {
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