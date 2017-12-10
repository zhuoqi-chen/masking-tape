'use strict';
const Service = require('egg').Service;
const tableName = 'vols';
class AdminService extends Service {
  /**
   * 添加期刊
   * @param {Objecr} data 需要插入的期刊数据
   * @return {Boolean} 是否插入成功
   */
  async create(data) {
    const date = new Date();
    Object.assign(data, {
      create_time: date,
      update_time: date,
    });
    const result = await this.app.mysql.insert(tableName, data);
    return result.affectedRows === 1;
  }
  /**
   * 期刊列表
   * @return {Array} 期刊列表
   */
  async list() {
    const vols = await this.app.mysql.select(tableName, {
      where: {
        is_deleted: 0,
      },
      orders: [[ 'id' ]],
    });
    return vols;
  }
  /**
   * 找到指定期刊
   * @param {Number | String} id 期刊id
   * @return {Object} 对应期刊数据
   * @memberof AdminService
   */
  async show(id) {
    const vol = await this.app.mysql.get(tableName, { id });
    return vol;
  }
  /**
   * 删除指定期刊
   * @param {Number | String} id 期刊id
   * @return {Boolean} 是否删除成功
   * @memberof AdminService
   */
  async destroy(id) {
    const result = await this.app.mysql.delete(tableName, { id });
    return result.affectedRows === 1;
  }
}

module.exports = AdminService;
