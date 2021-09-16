const Recurso = require('../../../domain/recurso/Recurso')
async function Recomendar_AreaTematicaYTipo(areaTematica,tipo,RecursoRepository){


    if(!areaTematica){
        return {errorMessage: "Debe ingresar un area Tematica"}
    }

    
    if(!tipo){
        return {errorMessage: "Debe ingresar un tipo"}
    }


    let recursos = await RecursoRepository.findByAreaTematicaAndTipo(areaTematica,tipo) 
    console.log(recursos)

    if(recursos.length==0){
        return {errorMessage: "No existen Recursos asociados a "+tipo+" de "+areaTematica}
    }

    return recursos.map(recurso => new Recurso(recurso._id,recurso.nombre,recurso.tipo,recurso.disponibilidad,recurso.areaTematica,recurso.fecha))

}

module.exports = {Recomendar_AreaTematicaYTipo}