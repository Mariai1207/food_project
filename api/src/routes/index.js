 const {Recipe, Diet}= require('../db.js')
 const axios = require('axios')

const { Router, response } = require('express');
const {apikey}= process.env;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const getRecipesApi= async ()=>{
   const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=e79b139f724e4913a9c13ad1455ff166&offset=0&number=5&addRecipeInformation=true')
   return response.data.results;
}

const getRecipesDb= async ()=>{
  const response= await Recipe.findAll({
     include: Diet
   })
   return response
}


router.get('/recipes', async (req,res)=>{
  const nameQuery= req.query.name;
  const responseApi=await getRecipesApi()
  const recipesApi= responseApi.map(recipe=>{
   return {
      title: recipe.title,
      image: recipe.image,
      diets: recipe.diets
     }  
  })
  const responseDb= await getRecipesDb()
  const recipesDb= responseDb.map(recipe=>{
     return {
      title: recipe.dataValues.name,
      diets: recipe.dataValues.Diets.map(diet => diet.name) 
      }
  }) 
  const allRecipes= recipesApi.concat(recipesDb)

   if(nameQuery) {
      let searchName= await allRecipes.filter(recipe=> recipe.title.includes(nameQuery))
      searchName.length? 
      res.send(searchName):
      res.send('no se encontró receta')
   }else{
      res.send(allRecipes)
   }
  

  
  
 
})

const getDietsDb= async ()=>{
   const response= await Diet.findAll({})
   return response 
}

const addDietsFromApi= async (diets)=>{
   const recipesApi = await getRecipesApi()
   recipesApi.forEach(element => {
      element.diets.forEach(diet => {
         if(!diets.includes(diet)){ 
            diets.push(diet)
            Diet.create({
               name:diet
            })
         }
      })
   });
}

router.get('/types', async (req, res)=>{
   const dietsModel= await getDietsDb()
   const diets= dietsModel.map(diet=>{
      return diet.name
   })

   await addDietsFromApi(diets)
   res.send(diets)   
})



module.exports = router;