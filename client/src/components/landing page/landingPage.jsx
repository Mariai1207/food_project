import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export function LandingPage(){
    return(
        <div>
            <section  className='section1'>
            <div >                
                <h1>landing page</h1>
            </div>
            <div>            
                <Link to= '/home'> <button className='button'>Home</button> </Link>
            </div>
            </section>
            

           
        </div>
    )
}