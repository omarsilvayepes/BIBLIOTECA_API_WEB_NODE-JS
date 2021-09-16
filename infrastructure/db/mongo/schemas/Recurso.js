const mongoose = require('mongoose')

const RecursoSchema = mongoose.Schema({
   

    nombre:{
        type:String,
        require: [true, 'nombre es obligatorio'],
        lowercase: true,
        minLength: [2, 'La longitud minima del nombre es 2'],
    },

    tipo:{
        type:String,
        lowercase: true,
        require: [true, 'tipo es obligatorio'],
        //enum: {values:['libro','revista','enciclopedia','periodico','carta','enciclica'], message: 'tipo no válido'}
    },

    disponibilidad:{
        type:Boolean,
        require: [true, 'disponibilidad es obligatorio'],
    },

    areaTematica:{
        type:String,
        lowercase: true,
        require: [true, 'area tematica es obligatoria'],
        minLength: [2, 'La longitud minima del area tematica  es 2'],
        
    },

    fecha:{
        type:String,
        require: [true, 'fecha es obligatoria'],
        lowercase: true,
           
    },
    
})

module.exports= mongoose.model('Recurso', RecursoSchema)