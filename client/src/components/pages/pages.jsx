import React from "react";

export function Pages({recipesPage, recipes, pages}){
    const pageNumber=[]

    for(let i=1; i<= Math.ceil(recipes/recipesPage);i++ ){
        pageNumber.push(i)
    }
    return (
        <nav>
            <h1>pages {pageNumber.length}</h1>
            <ul>
            {
                pageNumber.map(number=> (
                    <li>
                       <a onClick={()=>pages(number)}> {number}</a>
                    </li>
                    ) )
            }
            </ul>
        </nav>
     )
}