import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Astronauta from '../../assets/404.png';

export default function Error404(){
    return(
        <div className="error-container">
            <div className = "imagem">
                <img src={ Astronauta } alt = "Astronauta"/>
            </div>
            <div className="texto">
                <main>
                    <h1>Está perdido?</h1>
                    <p>A página que você procurava não existe.</p>
                    <Link to="/" >
                        <button className = "button">
                            Me traga para a Terra
                        </button>
                    </Link>
                </main>
            </div>
        </div>
    );
}
