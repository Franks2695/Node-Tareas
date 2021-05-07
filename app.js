const { argv } = require('./config/yargs');
const { crear, listar, actualizar, eliminar } = require('./controlador/tareas');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Creando una tarea...');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrando la lista de tareas...');
        listar();
        break;
    case 'actualizar':
        console.log('Actualizando una tarea...');
        let resp = actualizar(argv.descripcion, argv.completado)
        console.log(resp);
        break;
    case 'eliminar':
        console.log('Eliminando una tarea...');
        let tar = eliminar(argv.descripcion);
        console.log(tar);
        break;
    default:
        console.log('Comando no válido');
}