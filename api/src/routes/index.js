 const {Recipe, Diet}= require('../db.js')

const { Router, response } = require('express');
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
// lo mejor es modularizar
router.get('/recipes', (req,res)=>{ // quiero enviar todas las recetas de la api y de la db
   var str=''
   const requestUrl = url.parse(url.format({
      pathname: '/recipes/complexSearch',
      query: {
          apiKey: 'e79b139f724e4913a9c13ad1455ff166',
          offset: 0,
          number: 5,
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

      const jsonRecipes = JSON.parse(str)
      
    
     const recipes= jsonRecipes.results.map(result=>  {
            return {
             title: result.title,
             image: result.image,
             diets: result.diets
            }
         })
         
      Recipe.findAll({
         include: Diet
      })
      .then(response => { response.map(res=>{ 
         console.log(res)  
         newRecipe={
            title: res.dataValues.name,
            diets: res.dataValues.Diets.map(diet => diet.name)
         }      
        recipes.push(newRecipe)
      })})
      .then(() =>  res.send(recipes))
      .catch(err=> console.log(err))
      });
    }
  
    var req = https.request(options, callback);
    req.end();

} )

router.post
//obtener los tipos de dietas (desde la db,  )
router.get('/types', (req, res)=>{
  //Diet.findAll()
  //.then(response=>console.log('res',response))
   res.send(['gluten free','ketogenic','vegetarian', 'lacto vegetarian', 'lacto ovo vegetarian','ovo vegetarian', 'vegan', 'pescetarian','paleo','primal','low FODMAP','whole30', 'dairy free'])
})



module.exports = router;