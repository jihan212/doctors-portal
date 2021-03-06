import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light text-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="/">Dental service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="/">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="/">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/login">
                        <a class="nav-link mr-5 text-white" href="/">Log in</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;