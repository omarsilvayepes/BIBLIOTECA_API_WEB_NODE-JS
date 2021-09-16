const Recurso = require('../../../domain/recurso/Recurso')
async function  Borrar_Recurso(id,RecursoRepository){

    if(!id){
        return {errorMessage:"Debe ingresar un id"}

    }
    console.log("en caso de uso 1")
    let recurso= await RecursoRepository.findById(id)

    console.log(recurso)

    if(!recurso){
        return {errorMessage:"recurso no Encontrado"}
    }
    RecursoRepository.delete(id)
    return {message: "Recurso eliminado con exito",
            succes:true}
}
module.exports={Borrar_Recurso} 