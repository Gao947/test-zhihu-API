const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    if(ctx.url === '/'){
        ctx.body = 'This is MainPage';
    }else if(ctx.url === '/users'){
        if(ctx.method === 'GET'){
        ctx.body = 'This is UserPage';
        } else if(ctx.method === 'POST'){
            ctx.body = 'Create users';
        } else {
            ctx.status =405;
       } 
    } else if (ctx.url.match(/\/users\/\w+/)){
        const userId = ctx.url.match(/\/users\/(\w+)/)[1];
        ctx.body = `This is user ${userId}`
    }
        else {
            ctx.status =404;
    }
});


app.listen(2000);