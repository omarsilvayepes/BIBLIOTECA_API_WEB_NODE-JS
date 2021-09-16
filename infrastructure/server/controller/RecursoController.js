let {Crear_Recurso} = require('../../../application/usecases/recurso/Crear_Recurso')
let {Listar_Recursos} = require('../../../application/usecases/recurso/Listar_Recursos')
let {Borrar_Recurso} = require('../../../application/usecases/recurso/Borrar_Recurso')
let {Modificar_Recurso} = require('../../../application/usecases/recurso/Modificar_Recurso')
let {Consultar_Disponibilidad} = require('../../../application/usecases/recurso/Consultar_Disponibilidad')
let {Prestar_Recurso} = require('../../../application/usecases/recurso/Prestar_Recurso')
let {Devolver_Recurso} = require('../../../application/usecases/recurso/Devolver_Recurso')
let {Recomendar_AreaTematica} = require('../../../application/usecases/recurso/Recomendar_AreaTematica')
let {Recomendar_AreaTematicaYTipo} = require('../../../application/usecases/recurso/Recomendar_AreaTematicaYTipo')

let {RecursoRepositoryMongo} = require('../../repository/RecursoRepository')


async function addRecurso (req,res){
    try{
        
        
        const {nombre,tipo,areaTematica,fecha}=req.body
        let recurso=await Crear_Recurso(nombre,tipo,areaTematica,fecha,RecursoRepositoryMongo.prototype)
        res.json(recurso)
        console.log("controlador 3")
    

    }catch(error){
        res.status(500).send(error);
    }
}

async function getRecursos(req,res){
    try{
        
        let recurso=await Listar_Recursos(RecursoRepositoryMongo.prototype)
        console.log("controlador 2")
        res.json(recurso)
    }catch(error){
        res.status(500).send(error);
    }
}

async function deleteRecurso(req,res){
    try {
       
        const{id}=req.body
        let recurso=await Borrar_Recurso(id,RecursoRepositoryMongo.prototype)
        console.log("en controlador 2")

        res.json(recurso)
    } catch (error) {
        res.status(500).send(error);
    }
}

async function readDisponibility(req,res){
    try{
        console.log("controlador consultar dispo..")
        const{id}=req.body
        let recurso=await Consultar_Disponibilidad(id,RecursoRepositoryMongo.prototype)
        console.log("controlador 2")
        res.json(recurso)
    }catch(error){
        res.status(500).send(error);
    }
}

async function restRecurso(req,res){
    try{
        console.log("controlador prestar recurso..")
        const{id}=req.body
        let recurso=await Prestar_Recurso(id,RecursoRepositoryMongo.prototype)
        console.log("controlador 2")
        res.json(recurso)
    }catch(error){
        res.status(500).send(error);
    }
}

async function restoreRecurso(req,res){
    try{
        console.log("controlador devolver recurso..")
        const{id}=req.body
        let recurso=await Devolver_Recurso(id,RecursoRepositoryMongo.prototype)
        console.log("controlador 2")
        res.json(recurso)
    }catch(error){
        res.status(500).send(error);
    }
}

async function searchByAreaTematica(req,res){
    try{
        const{areaTematica}=req.body
        let recurso=await Recomendar_AreaTematica(areaTematica,RecursoRepositoryMongo.prototype)
        console.log("controlador 2")
        res.json(recurso)
    }catch(error){
        res.status(500).send(error);
    }
}

async function searchByAreaTematicaAndType(req,res){
    try{
        const{areaTematica,tipo}=req.body
        let recurso=await Recomendar_AreaTematicaYTipo(areaTematica,tipo,RecursoRepositoryMongo.prototype)
        console.log("controlador 2")
        res.json(recurso)
    }catch(error){
        res.status(500).send(error);
    }
}

async function updateRecurso (req,res){
    try{
        const {id,nombre,tipo,areaTematica,fecha}=req.body
        let recurso=await Modificar_Recurso(id,nombre,tipo,areaTematica,fecha,RecursoRepositoryMongo.prototype)
        res.json(recurso)
        console.log("controlador 3")
    

    }catch(error){
        res.status(500).send(error);
    }
}

module.exports ={addRecurso,getRecursos,deleteRecurso,readDisponibility,restRecurso,restoreRecurso,searchByAreaTematica,searchByAreaTematicaAndType,updateRecurso}
