import React from "react";
import './pages.css'

export function Pages({recipesPage, recipes, pages, currentPage,}){
    const pageNumber=[]
    
   

    for(let i=1; i<= Math.ceil(recipes/recipesPage);i++ ){
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className="position">
            <button className="currentPage">page {currentPage} </button>
            {
                pageNumber.map(number=> (
                    <div key={number}>
                <button key='uniqueKey1' onClick={()=>pages(number)}> {number}</button> 
                
                </div> 

                ))
            }  
            </ul>
        </nav>
     )
}