import React from "react";
import './pages.css'

export function Pages({recipesPage, recipes, pages}){
    const pageNumber=[]

    for(let i=1; i<= Math.ceil(recipes/recipesPage);i++ ){
        pageNumber.push(i)
    }
    return (
        <nav>
            <h1>pages {pageNumber.length}</h1>
            <ul className="position">
            {
                pageNumber.map(number=> (<button key={number} onClick={()=>pages(number)}> {number}</button>))
            }
            </ul>
        </nav>
     )
}