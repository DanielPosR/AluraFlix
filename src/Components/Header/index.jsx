import React from "react";
import styled from "styled-components";
import { Boton } from "../UI";
import logo from "../../assets/img/logo.png"


const Header = () => {

    const Barra = styled.header`
        background-color: #000;
        height: 7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
    `;

    const Logo = styled.img`
      height: 2.5rem;
      width: 10rem;
    `;

    return (
        <Barra>
            <Logo src={logo} alt="Logotipo" />
            <Boton>Nuevo Video</Boton>
        </Barra>
    )
}


export default Header;