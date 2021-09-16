const Recurso = require('../../domain/recurso/Recurso');
const RecursoSchema = require('../db/mongo/schemas/Recurso')
const RecursoRepository = require('../../domain/recurso/RecursoRepository');


class RecursoRepositoryMongo extends RecursoRepository{
    
    constructor(){
        super();
    }
    async save(recurso){
        console.log("dentro de guardar 0")
        const {nombre,tipo,disponibilidad,areaTematica,fecha} = recurso
        console.log("dentro de guardar 1")
        const mongoRecurso = new RecursoSchema({nombre,tipo,disponibilidad,areaTematica,fecha})
        console.log("dentro de guardar 2")
        let res =await mongoRecurso.save()
        console.log("dentro de guardar 3")

        return new Recurso(res._id,res.nombre,res.tipo ,res.disponibilidad,res.areaTematica,res.fecha)
    }

    
   /* 
    async findByName(nombre){
        const recurso= await RecursoSchema.findOne({nombre:nombre})
        return new Recurso(recurso.nombre,recurso.tipo,recurso.disponible,recurso.areaTematica,recurso.fecha)
        
    }
    */
    

    async findById(id){
        console.log("dentro de findBy id")
        return RecursoSchema.findOne({_id:id})
        
       
    }

    async delete(id){
        
        return RecursoSchema.deleteOne({_id:id})   
        
    }

    async findAll(){
        console.log("dentro del repositorio 1")
        return RecursoSchema.find({})
    }


    async findByNameAndType(nombre,tipo){
        console.log("dentro del repositorio nombre")
        return RecursoSchema.find({ $and:[{nombre:nombre},{tipo:tipo}]})
    }

    async findByType(tipo){
        console.log("dentro del repositorio tipo")
        return RecursoSchema.findOne({tipo:tipo})
    }

    
    async updateRecursoNonDisponible(id,fecha){
    
        return RecursoSchema.updateOne({_id:id},{disponibilidad:false,fecha:fecha})
    } 

    async updateRecursoToDisponible(id){
    
        return RecursoSchema.updateOne({_id:id},{disponibilidad:true})
    } 

    
    async findByAreaTematica(areaTematica){
        return RecursoSchema.find({areaTematica:areaTematica})
    }

    
    
    async findByAreaTematicaAndTipo(areaTematica,tipo){
    
        return RecursoSchema.find({ $and:[{areaTematica:areaTematica},{tipo:tipo}]})
    }


    async updateRecurso(id,nombre,tipo,disponibilidad,areaTematica,fecha){
        return RecursoSchema.updateOne({_id:id},{nombre:nombre,tipo:tipo,disponibilidad:disponibilidad,areaTematica:areaTematica,fecha:fecha})
    }   

}
module.exports = {RecursoRepositoryMongo}