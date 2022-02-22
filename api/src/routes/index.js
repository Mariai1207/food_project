 const {Recipe, Diet}= require('../db.js')

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
          apiKey: '6e08a62a996a4b8e9760b48d086446ba',
          offset: 0,
          number: 1,
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
      console.log(str)
    
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
         newRecipe={
            title: res.dataValues.name,
            diets: res.dataValues.Diets.map(diet => diet.name)
         }      
        recipes.push(newRecipe)
      })})
      .then(() =>  res.send(recipes))
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