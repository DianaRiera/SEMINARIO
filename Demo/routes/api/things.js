const express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({"module":"things"});
});

router.post('/', (res, req, next)=>{
    res.status(200).json({'msg':"Entro en el post"});
})
module.exports = router;