import React from "react";
import './pages.css'

export function Pages({recipesPage, recipes, pages, currentPage}){
    const pageNumber=[]

    for(let i=1; i<= Math.ceil(recipes/recipesPage);i++ ){
        pageNumber.push(i)
    }
    return (
        <nav>
            <h1>page {currentPage} </h1>
            <ul className="position">
            {
                pageNumber.map(number=> (
                    <div>
                <button key={number} onClick={()=>pages(number)}> {number}</button> 
                
                </div> 

                ))
            }  
           
            </ul>
        
        </nav>
     )
}