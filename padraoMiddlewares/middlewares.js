// middlewares pattens (chain of responsibility)

const passoA = function(ctx, next) { //(object ,proximoPasso)
    ctx.value1 = 'mid1';
    next();
}

const passoB = function(ctx, next) {
    ctx.value2 = 'mid2';
    next();
}

const passoC = function(ctx) {
    ctx.value3 = 'mid3';
}

const exec = function(ctx, ...middlewares) {
    const execPasso = function(index) {
        return middlewares[index] ? middlewares[index](ctx, () => execPasso(index + 1)) : false;
    }
    execPasso(0);
}

const ctx = {}
exec(ctx, passoA, passoB, passoC)
console.log(ctx)