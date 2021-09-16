const Recurso = require('../../../domain/recurso/Recurso')
async function Consultar_Disponibilidad(id,RecursoRepository){

    console.log("estoy en consultar disponibilidad")

    if(!id){
        return {errorMessage: "Debe ingresar un identificador del Recurso"}
    }

    let recursoExist = await RecursoRepository.findById(id) 
    console.log(recursoExist)

    if(!recursoExist){// validar cuando el id este vacio, es decir "id": ""
        return {errorMessage: "El recurso no existe"}
    }
    

   
    if(recursoExist.disponibilidad===true){
        return {errorMessage: "El recurso esta disponible",
        success: false}

    }

    if(recursoExist.disponibilidad===false){
        return {errorMessage: "El recurso NO  esta disponible , la fecha del ultimo prestamo fue: "+
        recursoExist.fecha,
        success: false}

    }


}

module.exports = {Consultar_Disponibilidad}