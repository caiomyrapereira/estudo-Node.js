// console.log(global) objeto global

global.myApp = Object.freeze({
    name: 'sistema legal',
    saudacao() {
        return 'estou em todos os lugares!'
    }
});