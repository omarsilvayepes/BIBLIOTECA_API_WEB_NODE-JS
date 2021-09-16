const Recurso = require('../../../domain/recurso/Recurso')
async function Listar_Recursos(RecursoRepository){
    console.log("caso de uso 1")
    let recursos = await RecursoRepository.findAll()
    console.log("caso de uso 2")
    return recursos.map(recurso => new Recurso(recurso._id,recurso.nombre,recurso.tipo,recurso.disponibilidad,recurso.areaTematica,recurso.fecha))
}

module.exports = {Listar_Recursos}