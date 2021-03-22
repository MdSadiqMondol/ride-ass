import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                 <h1 class="navbar-brand rider">Rider Portal</h1>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                    </button>
                     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                     <ul ul class = "navbar-nav me-auto mb-2 mb-lg-0" >
                         <li class="nav-item ">
                             <Link to="/">Home</Link>
                        </li>
                        
                        <li class="nav-item">
                         <Link to="/destination">Destination</Link>
                        </li>
                        <li class="nav-item">
                         <Link to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                         <Link to="/contact">Contact</Link>
                        </li>
                     </ul>
                        <form class="d-flex">
                            <Link to="/login"><button class="btn btn-success">Login</button></Link>
                        </form>
                     </div>
                 </div>
             </nav>
        </div>
    );
};

export default Header;