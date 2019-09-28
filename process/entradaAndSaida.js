const anonimo = process.argv.indexOf('-a') !== -1;

anonimo ? falaAnonimo() : informeNome();

function falaAnonimo() {
    process.stdout.write('fala anônimo!\n')
    process.exit()
}

function informeNome() {
    process.stdout.write('digite o seu nome:');
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '');

        process.stdout.write(`\nfala ${name}`);
        process.exit()

    })
}