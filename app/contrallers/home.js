class HomeCtl {
    index(ctx){
        ctx.body = '<h1>This is HomePage</h1>'; 
    }
    upload(ctx) {
        const file = ctx.request.files.file;
        ctx.body = { path: file.path };
    }
} 

module.exports = new HomeCtl();