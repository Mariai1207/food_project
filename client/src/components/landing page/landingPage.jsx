import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export function LandingPage(){
    return(
        <div>
            <h1>landing page</h1>
        <Link to= '/home'> ir a home</Link>
        </div>
    )
}