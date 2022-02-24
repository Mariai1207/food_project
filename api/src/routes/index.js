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
   const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=eb86bffdf52d48f4afd70b7a602d513b&offset=0&number=5&addRecipeInformation=true')
   return response.data.results;
}

const getRecipesDb= async ()=>{
  const response= await Recipe.findAll({
     include: Diet
   })
   return response
}
const getAllRecipes= async ()=>{
   const responseApi=await getRecipesApi()
   const recipesApi= responseApi.map(recipe=>{
      return {
         id: recipe.id,
         title: recipe.title,
         image: recipe.image,
         diets: recipe.diets
        }  
     })
   const responseDb= await getRecipesDb()
   const recipesDb= responseDb.map(recipe=>{
      return {
       id: recipe.dataValues.id,
       title: recipe.dataValues.name,
       diets: recipe.dataValues.Diets.map(diet => diet.name) 
       }
   }) 
   const allRecipes= recipesApi.concat(recipesDb)
   return allRecipes
}


router.get('/recipes', async (req,res)=>{
  const nameQuery= req.query.name; 
  const allRecipes= await getAllRecipes() 
   if(nameQuery) {
      let searchName= await allRecipes.filter(recipe=> recipe.title.toLowerCase().includes(nameQuery))
      console.log(searchName)
      searchName.length?       
      res.status(200).send(searchName):
      res.status(404).send('no se encontró receta')
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

router.get('/recipes/:id', async (req, res)=>{
   const id= req.params.id;
   const allRecipes= await getRecipesApi()
   if(id){
      
      let findRecipe= allRecipes.filter(recipe=> recipe.id== id)
      if(findRecipe.length){
      recipeDetail= findRecipe.map(recipe=>{
         if(recipe.analyzedInstructions.length){
            return {
               id: recipe.id,
               title: recipe.title,
               image: recipe.image,
               diets: recipe.diets,
               sumary: recipe.sumary,
               healthScore: recipe.healthScore,
               spoonacularScore: recipe.spoonacularScore,
               steps: recipe.analyzedInstructions[0].steps

            }  
         }else{
            return {
               id: recipe.id,
               title: recipe.title,
               image: recipe.image,
               diets: recipe.diets,
               sumary: recipe.sumary,
               healthScore: recipe.healthScore,
               spoonacularScore: recipe.spoonacularScore
            }
         }
      })
      res.status(200).json(recipeDetail)
      }else{
      res.status(404).send(' no se encontró informacion')}
   }

})



module.exports = router;