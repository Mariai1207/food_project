const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// si necesito utilizar los modelos:
// const { Recipe }= require('../db.js')
var http = require ('http');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', (req,res)=>{ // quiero enviar todas las recetas de la api y de la db
   var str=''
   var options ={
      host: ' https://api.spoonacular.com'
      path: '/recipes/complexSearch'+
   }
} )


module.exports = router;
