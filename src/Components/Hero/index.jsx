import styled from "styled-components";
import hero from "../../assets/img/hero.png";


const Hero = () => {

    const Hero = styled.div`
      background-image: url(${hero});
      background-repeat: no-repeat;
      background-size: cover;
      height: 40rem;
      max-width: 100%;
      background-position: center;
      position: relative;
    `;

    const Contenido = styled.div`
        position: absolute;
        background-color: rgba(0 0 0 / 40%);
        width: 100%;
        height: 100%;
        padding: 1rem;
    `;

    return (
        <Hero>
            <Contenido />
        </Hero>
    )
}


export default Hero;