const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });

const db = [{ name: "Mike" }]

router.get('/', (ctx) => {
    ctx.body = '<h1>This is HomePage</h1>'; //这是主页
});

usersRouter.get('/', (ctx)=>{
    ctx.body =db; //这是用户列表页
});

usersRouter.post('/', (ctx)=>{
    db.push(ctx.request.body);
    ctx.body = ctx.request.body; //创建用户
});

usersRouter.get('/:id', (ctx)=>{

    ctx.body = db[ctx.params.id * 1]; //这是用户
});;

usersRouter.put('/:id', (ctx)=>{
    db[ctx.params.id * 1] = ctx.request.body;
    ctx.body = ctx.request.body; //修改用户
});

usersRouter.delete('/:id', (ctx)=>{
    db.splice(ctx.params.id * 1, 1);
    ctx.status = 204; //删除用户
});

app.use(bodyparser());
app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.listen(2000);