// db 업데이트 할 때마다 변경되는 정보
require('dotenv').config();
const mongoose = require("mongoose");
const infoSchema = require('../models/info');
const {DB_URI} = process.env;        

class infoService {
    constructor() {
        // mongoose
        // .connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        // .then(async () => console.log('inforService DB is connecting...'))
        // .catch(e => console.log(e));
    }

    // 최신 블록 저장 정보 가져오기
    async getInfo(last_irreversible_block_num) {
        let info = await infoSchema.findOne();
        if(!info){
            return await this.saveInfo(last_irreversible_block_num-3);
        }
        return info;
    }

    // 새로운 블록 info 넣어줌(초기화 용도)
    async saveInfo(last_update_block_num) {
        let new_info = new infoSchema({last_update_block_num: last_update_block_num});
        return await new_info.save();
    }

    // 블록 info update
    async updateInfo(last_update_block_num) {
       let new_info = await infoSchema.findOneAndUpdate({}, {last_update_block_num});
       console.log('Update new block info: ', last_update_block_num)
       return new_info;
    }
}

// let ming = new infoService();
// ming.getInfo(139935986)
// .then(res => console.log(res.id))

module.exports = infoService;