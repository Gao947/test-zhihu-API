const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const app = new Koa();
const routing = require('./routes');
const { connnectionStr } = require('./config'); 

mongoose.connect(connnectionStr, ()=> console.log('MongoDB 连接成功了！'));
mongoose.connection.on('error', console.error);

app.use(error({
    postFormat: (e, {stack, ...rest})=>process.env.NODE_ENV === 'production' ? rest: {stack, ...rest}
}));
app.use(bodyparser());
app.use(parameter(app));
routing(app);

app.listen(2000, () => console.log('程序启动在 2000 端口了'));