const Recurso = require('../../../domain/recurso/Recurso')
async function Recomendar_AreaTematica(areaTematica,RecursoRepository){


    if(!areaTematica){
        return {errorMessage: "Debe ingresar un area Tematica"}
    }

    let recursos = await RecursoRepository.findByAreaTematica(areaTematica) 
    console.log(recursos)

    if(recursos.length==0){
        return {errorMessage: "No existen Recursos asociados a "+areaTematica}
    }

    return recursos.map(recurso => new Recurso(recurso._id,recurso.nombre,recurso.tipo,recurso.disponibilidad,recurso.areaTematica,recurso.fecha))

}

module.exports = {Recomendar_AreaTematica}