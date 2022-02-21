const { Router } = require('express');
const {apikey}= process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// si necesito utilizar los modelos:
// const { Recipe }= require('../db.js')
var https = require ('https');
var url = require('url')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', (req,res)=>{ // quiero enviar todas las recetas de la api y de la db
   var str=''
   const requestUrl = url.parse(url.format({
      pathname: '/recipes/complexSearch',
      query: {
          apiKey: 'e79b139f724e4913a9c13ad1455ff166',
          offset: 0,
          number: 2,
          addRecipeInformation:true
      }
  }));

   var options ={
      host: 'api.spoonacular.com',
      path: requestUrl.path
   }

   var callback = function(response) {
      response.on('data', function (chunk) {
        str += chunk;
      });
  
      response.on('end', function () {
       /*const result= str.results.map(result=>  {
            return {
             title: result.title,
             image: result.image,
             diets: result.diets
            }
         })*/
        res.send(str); // SEND ACTUAL RESPONSE HERE
       
      });

    }
  
    var req = https.request(options, callback);
    req.end();

} )

//obtener los tipos de dietas (desde la db,  )
router.get('/types', (req, res)=>{
   res.send(['Gluten Free','Ketogenic','Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian','Paleo','Primal','Low FODMAP','Whole30'])
})


module.exports = router;