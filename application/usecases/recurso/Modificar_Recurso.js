const Recurso = require('../../../domain/recurso/Recurso')
async function Modificar_Recurso(id,nombre,tipo,areaTematica,fecha,RecursoRepository){

    if(!id){
        return {errorMessage: "Debe ingresar un id de recurso"}
    }
    if(!nombre){
        return {errorMessage: "Debe ingresar un nombre de Recurso"}
    }

    if(!tipo){
        return {errorMessage: "Debe ingresar un tipo de Recurso"}
    }
    if(!areaTematica){
        return {errorMessage: "Debe ingresar un areaTematica de Recurso"}
    }
    if(!fecha){
        return {errorMessage: "Debe ingresar una fecha de ingreso"}
    }

 
    let recursoExist = await RecursoRepository.findById(id) 
    
   console.log(recursoExist)
    
    if(!recursoExist){
        return {errorMessage: "Recurso no existe en Base de datos",
        success: false}

    }
 
    await RecursoRepository.updateRecurso(id,nombre,tipo,recursoExist.disponibilidad,areaTematica,fecha)
    return {errorMessage: "Recurso  Modificado con exito",
    success: false}

}

module.exports = {Modificar_Recurso}