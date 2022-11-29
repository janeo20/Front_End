import React from "react";
import './Home.css'

function Home(){
    return(
        <div className="menu">
             <ul>
            <li>
                <a href="index.html"> Home </a>
            <li>
                <a href="contato.html"> Contato </a>
            </li>
            </li>
            <br />
            <input className="procurar" placeholder="Pesquise..." />
            <button className="btn-pesquise">enviar</button>
        </ul>
        </div>
    );
}

export default Home; 