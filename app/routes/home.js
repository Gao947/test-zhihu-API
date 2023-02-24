const Router = require('koa-router');
const router = new Router();
const { index } = require('../contrallers/home');

router.get('/', index);

module.exports = router;