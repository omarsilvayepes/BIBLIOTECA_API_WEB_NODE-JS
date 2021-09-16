'use strict';


class Recurso {
    constructor (id,nombre,tipo,disponibilidad,areaTematica,fecha){
        this.id = id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.disponibilidad=disponibilidad;
        this.areaTematica=areaTematica;
        this.fecha=fecha;
    }
}

module.exports = Recurso;