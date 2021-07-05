import React from 'react';

import './style.css';

import Logo from '../../assets/logo.svg';

import { FiCopy } from 'react-icons/fi';

export default function EnviaId(){

    function Copy(){
        var OngId = document.getElementById("OngId");
        OngId.select();
        document.execCommand("copy");
    }

    return(
        <div className="container-id">
            <img src = { Logo } alt = "Be The Hero" />

            <div className="box">
                <h2> NomeOng foi cadastrada com sucesso!</h2>
                <h4> Para acessar a plataforma Be The Hero, será necessário um ID de Login. O seu está logo abaixo:</h4>
                <form>
                    <input 
                        id = "OngId" 
                        type = "text"
                        value = { "ongId" }
                    /> 
                    <FiCopy 
                        className = "copy"
                        size = {30} 
                        color = " #41414d"
                        onClick = { Copy }
                        alt = "Copiar ID"
                    />
                </form>
                <button className = "button">Enviar para meu e-mail</button>
            </div>
        </div>
    );
}