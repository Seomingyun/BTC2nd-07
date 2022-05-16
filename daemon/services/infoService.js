// db 업데이트 할 때마다 변경되는 정보
require('dotenv').config();
const infoSchema = require('../models/info');       

class infoService {
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

module.exports = infoService;