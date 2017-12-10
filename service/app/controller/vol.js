'use strict';

const Controller = require('egg').Controller;
const createRule = {
  name: { type: 'string' },
};
class VolController extends Controller {
  async index() {
    const result = await this.ctx.service.vol.list();
    this.ctx.body = result;
  }
  async create() {
    this.ctx.validate(createRule);
    const data = {
      name: this.ctx.request.body.name,
    };
    const result = await this.ctx.service.vol.create(data);
    this.ctx.body = result;
  }
  async destroy() {
    const id = this.ctx.request.body.id;
    const result = await this.ctx.service.vol.destroy(id);
    this.ctx.body = result;
  }
}

module.exports = VolController;
