'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/vol', controller.vol.index);
  router.post('/admin/vol', controller.vol.create);
  router.delete('/admin/vol', controller.vol.destroy);
};
