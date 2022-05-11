require('dotenv').config();
const mongoose = require("mongoose");

const { JsonRpc } = require('eosjs');
const fetch = require("node-fetch");
const rpc = new JsonRpc('http://jungle2.cryptolions.io:80', {fetch});

const infoService = require('./services/infoService');
const blockService = require('./services/blockService');
const transactionService = require('./services/transactionService');

const infoInterface = new infoService();
const blockInterface= new blockService();
const transactionInterface = new transactionService();

const {DB_URI} = process.env;

const getBlockInfo = async() => {
    const result = await rpc.get_info();
    return result;
}

const createSchema = async(block_num) => {
    let block = await rpc.get_block(block_num);
    block['_id'] = block.block_num;

    let txs = block.transactions;
    txs = txs.map((tx) => {
        tx.block_num = block_num;
        return tx;
    })

    delete block.transactions;

    return [block, txs];
}

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(async () => {
            console.log('DB is connecting...');

            const lastIrrBlock = (await getBlockInfo()).last_irreversible_block_num;
            const lastCurBlock = (await infoInterface.getInfo(lastIrrBlock)).last_update_block_num;

            console.log(lastIrrBlock, lastCurBlock);

            var blocks = [];
            var transactions = [];
            for (let num = lastCurBlock+1; num <= lastIrrBlock; num++){
                let [block, txs] = await createSchema(num);
                blocks = [...blocks, ...[block]];
                transactions = [...transactions, ... txs]
            }

            await blockInterface.saveAllBlocks(blocks);
            await transactionInterface.saveAlltransactions(transactions);

            await infoInterface.updateInfo(lastIrrBlock);
        })
