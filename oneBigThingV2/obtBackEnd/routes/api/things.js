const express = require('express');
var router = express.Router();

// JSON -> Javascript Object Notation

// json.org
var thingsCollection = [];

var thingsStructure = {
    "id": 0,
    "description": '',
    "fecha": 0,
    "by": ''
};

thingsCollection.push(
    Object.assign({},thingsStructure, {"id":1, "description":"Mi Primer Thing", "fecha": new Date().getTime(), "by":"Norman"})
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});

// CRUD Crear (Insert), Leer (Read), Actualizar (Update), Eliminar (Delete).
// REST
// GET Consultas Read, Lectura
// POST Crear - Insert C
// PUT Update - Actualizar
// DELETE Delete - Eliminar

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"fecha": new Date().getTime(), "id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
}); // post /
// http://localhost:3000/api/things/1
router.put('/:idElemento', (req, res, next)=>{
    var id = parseInt(req.params.idElemento);
    var update = req.body;
    var modifiedObject = {};
    var originalObject = {};
    thingsCollection = thingsCollection.map((e, i)=>{
        if (e.id === id){
            originalObject = Object.assign({}, e);
            return Object.assign(modifiedObject, e, req.body);
        }
        return e;
    });//map
    res.status(200).json({"o": originalObject, "m": modifiedObject});
}) // put /

router.delete('/:id', (req, res, next)=>{
    var id = parseInt(req.params.id);
    thingsCollection = thingsCollection.filter((e, i)=>{
        return (e.id !== id);
    }); //
    res.status(200).json({'msg': 'Elemento ' + id + ' fue eliminado'});
}); // delete /

module.exports = router;