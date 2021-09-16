const Recurso = require('../../../domain/recurso/Recurso')
async function Crear_Recurso(nombre,tipo,areaTematica,fecha,RecursoRepository){

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

   
    //let recursoExist = await RecursoRepository.findByName(nombre) 
    let recursoExist = await RecursoRepository.findByNameAndType(nombre,tipo) 
    
   console.log(recursoExist)
   console.log(nombre)
   console.log(tipo)

   console.log("crear recurso  0")
   
   
    if(recursoExist.length!=0){
        return {errorMessage: "No se pueden crear dos recursos con el mismo nombre y tipo",
        success: false}

    }

    
    console.log("crear recurso  1")
    const recurso = new Recurso(null,nombre,tipo,true,areaTematica,fecha)
    console.log("crear recurso  2")
    return await RecursoRepository.save(recurso)
    

}

module.exports = {Crear_Recurso}