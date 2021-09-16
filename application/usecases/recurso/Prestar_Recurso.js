const Recurso = require('../../../domain/recurso/Recurso')
async function Prestar_Recurso(id,RecursoRepository){

    if(!id){
        return {errorMessage: "Debe ingresar un identificador del Recurso"}
    }

    let recursoExist = await RecursoRepository.findById(id) 
    console.log(recursoExist)

    if(!recursoExist){
        return {errorMessage: "El recurso no existe"}
    }
    
    
    if(recursoExist.disponibilidad==false){
      
        return {mensajeDeError: "Recurso "+recursoExist.nombre+" No esta disponible para prestamo",
        success: false}

        // se retorna un json con la respuesta deseada.

    }

    const fechaActual= new Date()
    await RecursoRepository.updateRecursoNonDisponible(id,fechaActual)
    return {errorMessage: "Recurso  Prestado",
    success: false}

}

module.exports = {Prestar_Recurso}