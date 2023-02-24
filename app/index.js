const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const routing = require('./routes')

app.use(bodyparser());
routing(app);

app.listen(2000, () => console.log('程序启动在 2000 端口了'));