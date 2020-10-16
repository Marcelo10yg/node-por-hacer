const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por realizar'
};
const completado = {
    defaut: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por realizar', {
        descripcion
    })
    .command('actualizar', 'actializa el estado completado de una tarea', {

        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}