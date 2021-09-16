const Recurso = require('../../../domain/recurso/Recurso')
async function Devolver_Recurso(id,RecursoRepository){

    if(!id){
        return {errorMessage: "Debe ingresar un identificador del Recurso"}
    }

    let recursoExist = await RecursoRepository.findById(id) 
    console.log(recursoExist)

    if(!recursoExist){
        return {errorMessage: "El recurso no existe"}
    }
    
    
    if(recursoExist.disponibilidad==true){
      
        return {errorMessage: "Recurso "+recursoExist.nombre+"  esta disponible para prestamo",
        success: false}

    }

    await RecursoRepository.updateRecursoToDisponible(id)
    return {errorMessage: "Recurso  Devuelto",
    success: false}

}

module.exports = {Devolver_Recurso}