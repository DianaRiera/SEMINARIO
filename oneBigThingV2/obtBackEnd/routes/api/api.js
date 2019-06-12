const express = require('express');
const router = express.Router();

const securityApi = require('./security');
const thingsApi = require('./things');

router.get('/', (req, res, next)=>{
    //req toda la peticion del cliente.
    //res toda la respuesta que le vamos a dar al cliente.
    //next  un elemento porsi. (si no se puede usar en esta funcion, que se use en la siguiente que esta en cola).
    res.status(200).json({"api":"Version 1."})
    //200 es un ok, todo esta bien.
    //400 es un error.
});

router.use('/security', securityApi);
router.use('/things', thingsApi);
/*router.get('/hello', (req, res, next)=>{
    res.status(200).json({"msg":"Hola Putos"});
});
*/

module.exports = router;