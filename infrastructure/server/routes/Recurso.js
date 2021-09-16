const express = require('express');
let router = express.Router();
const {addRecurso,getRecursos,deleteRecurso,readDisponibility,restRecurso,restoreRecurso,searchByAreaTematica,searchByAreaTematicaAndType,updateRecurso} = require('../controller/RecursoController');

router.post('/recurso',addRecurso)
router.get('/recurso',getRecursos)
router.delete('/recurso',deleteRecurso)
router.put('/recurso/modificar',updateRecurso)
router.get('/recurso/consultar-disponibilidad',readDisponibility)
router.put('/recurso',restRecurso)
router.patch('/recurso',restoreRecurso)
router.get('/recurso/recomendar',searchByAreaTematica)
router.get('/recurso/recomendar/ambos',searchByAreaTematicaAndType)


module.exports =router
