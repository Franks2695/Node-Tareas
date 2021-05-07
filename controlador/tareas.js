const fs = require('fs');
var colors = require('colors')
var chalk = require('chalk')

let tareasPorHacer = [];

const guardarDatos = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('./data/datos.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar la data', err)
    });
}

const leerDatos = () => {
    try {
        tareasPorHacer = require('../data/datos.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const crear = (descripcion) => {

    leerDatos();

    let tarea = {
        descripcion,
        completado: false
    }

    let duplicado = tareasPorHacer.filter(tarea => tarea.descripcion === descripcion);

    if (duplicado >= 0) {
        tareasPorHacer.push(tarea);
        guardarDatos();
        console.log('');
        return tarea;
    }
    console.log('');
    return 'Ya existe esta tarea, no es posible crearla. Porfavor ingrese otra tarea'.yellow;
}

const listar = () => {
    leerDatos();

    console.log("==============================");
    console.log(' - - - TAREAS POR HACER - - - ');
    console.log("==============================");

    for (let tarea of tareasPorHacer) {
        if (tarea.completado == true) {
            console.log(tarea.descripcion);
            console.log(colors.brightGreen('Estado:', tarea.completado));
            console.log("--------------------------");
        } else {
            console.log(tarea.descripcion);
            console.log(chalk.rgb(254, 80, 10)('Estado:', tarea.completado));
            console.log("--------------------------");
        }
    }
}

const actualizar = (descripcion, completado = true) => {
    leerDatos();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDatos();
        console.log('');
        return 'Tarea completada exitosamente'.green;
    }
    console.log('');
    return 'No existe la tarea, porfavor actualice una tarea existente'.red;
}

const eliminar = (descripcion) => {
    leerDatos();

    /*let tarea = {
        descripcion,
        completado: false
    }

    tareasPorHacer.pop(tarea);

    guardarDatos();

    return tarea; */

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer.splice(index, 1);
        guardarDatos();
        console.log('');
        return 'Tarea eliminada exitosamente'.bgGreen;
    }
    console.log('');
    return 'No existe la tarea,  porfavor elimine una tarea existente'.bgRed;
}

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}