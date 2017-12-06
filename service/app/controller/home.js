'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const post = await this.app.mysql.get('test', { id: 1 });
    this.ctx.body = post;
  }
}

module.exports = HomeController;
