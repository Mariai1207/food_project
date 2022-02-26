import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export function LandingPage(){
    return(
        <div>
            <section>
            <div className='Image'>
                <img src='https://cdn.pixabay.com/photo/2020/05/25/17/04/cashew-nut-5219504_960_720.jpg' alt= ''/>
            </div>
            </section>
            <h1>landing page</h1>
            <div className='button'>
            <button ><Link to= '/home'>Home  </Link></button>
                <Link to= '/home'> <button><span>Home</span></button> </Link>
            </div>
        </div>
    )
}