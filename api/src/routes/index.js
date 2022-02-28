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
   const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=e79b139f724e4913a9c13ad1455ff166&offset=0&number=20&addRecipeInformation=true')
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
         diets: recipe.diets,
         spoonacularScore: recipe.spoonacularScore
        }  
     })
   const responseDb= await getRecipesDb()
   const recipesDb= responseDb.map(recipe=>{
      return {
       id: 'db'+recipe.dataValues.id,
       title: recipe.dataValues.name,
       image: recipe.dataValues.image,
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
   return diets
}

 async function storeDietsDb(){
   const dietsModel= await getDietsDb()
   const diets= dietsModel.map(diet=>{
      return diet.name
   })
   return await addDietsFromApi(diets)
}

router.get('/types', async (req, res)=>{
   const diets = await storeDietsDb()
   res.send(diets)   
})

async function processDBDetail(id){
   let pk= id.substring(2)
   const recipe= await Recipe.findByPk(pk, {
      include:Diet
   })
   var recipeDetail ={
      id: 'db'+recipe.dataValues.id,
      title: recipe.dataValues.name,
      diets: recipe.dataValues.Diets.map(diet => diet.name),
      sumary: recipe.dataValues.sumary 
     }
     
     if(recipe.dataValues.score){
        recipeDetail.score= recipe.dataValues.score
     }
     if(recipe.dataValues.healthScore){
      recipeDetail.healthScore= recipe.dataValues.healthScore
   }
   if(recipe.dataValues.steps){
      recipeDetail.steps= recipe.dataValues.steps
   }
   return recipeDetail
}

router.get('/recipes/:id', async (req, res)=>{
   const id= req.params.id;
   if(id.includes('db')){
     var recipeDetail = await processDBDetail(id)
     res.send(recipeDetail)
   }
   else{
      const response= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e79b139f724e4913a9c13ad1455ff166`)
      const recipe= response.data
     
             recipeDetail= {
                  id: recipe.id,
                  title: recipe.title,
                  image: recipe.image,
                  diets: recipe.diets,
                  sumary: recipe.sumary,
                  healthScore: recipe.healthScore,
                  score: recipe.spoonacularScore            
   
               }  
            if(recipe.analyzedInstructions.length){
               recipeDetail.steps=recipe.analyzedInstructions[0].steps
            }
            res.status(200).json(recipeDetail)
   }
     
    

  
      })

      router.post('/recipes', async(req,res)=>{
         let {name, sumary, score, healthScore, steps,image,types}= req.body
         let recipeCreated= await Recipe.create({
            name,
            sumary,
            score,
            healthScore,
            steps,
            image
         })
         let dietdb= await Diet.findAll({where: {name: types}})
         recipeCreated.addDiet(dietdb)
         res.send('recipeCreated')
      })
      
     




module.exports = router;
