import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router,  Routes } from 'react-router-dom';
import { LandingPage } from './components/landing page/landingPage.jsx';
import { Home } from './components/home/home';
import { AddRecipe } from './components/add recipe/addRecipe';
import {RecipeDetail } from './components/recipeDetail/recipeDetail.jsx'
import RecipeCreated from './components/recipeCreated/recipeCreated';


function App() {
  return (
<Router>
    <div className="App">
      
      
        <Routes>
            <Route  path= '/' element ={<LandingPage/>}/> 
            <Route  path= '/home' element ={<Home/>}/> 
            <Route  path= '/createRecipe' element ={<AddRecipe/>}/> 
            <Route  path= '/recipes/:id' element ={< RecipeDetail/>}/> 
            <Route  path= '/recipecreatedsuccessfully' element={<RecipeCreated/>} />

        </Routes>
      
    </div>
</Router>
  );
}

export default App;
