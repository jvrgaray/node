const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", {
    base: {
      demand: true,
      alias: "b"
    },
    limite: {
      alias: "l",
      default: 10
    }
  })
  .command("crear", "Crea un archivo con la tabla de multiplicar", {
    base: {
      demand: true,
      alias: "b"
    },
    limite: {
      alias: "l",
      default: 10
    }
  })
  .help().argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then(tabla => console.log(`Tabla del ${argv.base}: \n ${tabla}`))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then (archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//let base = 1;
//let argv2 = process.argv;

/*let parametro = argv[2];
let base = parametro.split('=')[1];
//console.log(process.argv);
console.log(base);

*/
