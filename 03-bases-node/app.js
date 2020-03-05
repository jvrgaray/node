const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla de multiplicar', {
                        base: {
                            demand: true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()
                    .argv;
const { crearArchivo } = require("./multiplicar/multiplicar");

//let base = 1;
let argv2 = process.argv;
console.log(argv.base);
console.log(argv.limite);
/*let parametro = argv[2];
let base = parametro.split('=')[1];
//console.log(process.argv);
console.log(base);

crearArchivo(base)
.then (archivo => console.log(`Archivo creado: ${archivo}`))
.catch(err => console.log(err));*/