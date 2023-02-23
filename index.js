const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'This is MainPage';
});

router.get('/users', (ctx)=>{
    ctx.body = 'This is User List';
});

router.post('/users', (ctx)=>{
    ctx.body = 'Create Users';
});

router.get('/users/:id', (ctx)=>{
    ctx.body = `This is user ${ctx.params.id}`;
})

app.use(router.routes());

app.listen(2000);