const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });

const auth = async (ctx, next) => {
    if(ctx.url !== '/users'){
    ctx.throw(401);   
    }
    await next();
};

router.get('/', (ctx) => {
    ctx.body = 'This is MainPage';
});

usersRouter.get('/', auth, (ctx)=>{
    ctx.body = 'This is User List';
});

usersRouter.post('/', auth, (ctx)=>{
    ctx.body = 'Create Users';
});

usersRouter.get('/:id', auth, (ctx)=>{
    ctx.body = `This is user ${ctx.params.id}`;
})

app.use(router.routes());
app.use(usersRouter.routes());

app.listen(2000);