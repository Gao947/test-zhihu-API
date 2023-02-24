class HomeCtl {
    index(ctx){
        ctx.body = '<h1>This is HomePage</h1>'; 
    }
} 

module.exports = new HomeCtl();