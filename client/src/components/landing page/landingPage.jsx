import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export function LandingPage(){
    return(
        <div>
            <section  className='section1'>
            
            <div>            
                <Link to= '/home'> <button className='button'>Home</button> </Link>
            </div>
            </section>
            

           
        </div>
    )
}