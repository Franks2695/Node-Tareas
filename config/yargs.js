const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado una tarea'
}

const argv = require("yargs")
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('listar', 'Muestra la lista de tareas')
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina una tarea existente', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}