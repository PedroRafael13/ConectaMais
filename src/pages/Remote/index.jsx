import React from "react";
import {
  HeroSection,
  TextContainer,
  MainTitle,
  Subtitle,
  ImageContainer,
  DiagonalDivider,
  SecurityIcon,
  FingerprintIcon,
  PeopleIcon,
  GlobeIcon,
} from "./styled";
import FuncionalidadesGrid from "../../components/servicesRemote";
import AppLogo from "../../assets/app.jpg"
import { Header } from "../../components/cardNav/header";
import BeneficiosRemoto from "./BeneficioRemoto";

const ControleAcessoInteligente = () => {
  return (
    <>
      <Header />
      <HeroSection>
        <TextContainer>
          <MainTitle>
            Controle de acesso inteligente em condomínios residenciais
          </MainTitle>
          <Subtitle>entenda a necessidade e prepare-se!</Subtitle>
        </TextContainer>

        <DiagonalDivider />

        <ImageContainer>
          {/* Imagem de fundo real agora definida no ImageContainer.styles.js */}
          {/* Adicionar um texto de destaque sobre a imagem, se necessário */}
          {/* <h2 style={{ color: 'white', zIndex: 10 }}>Portaria Remota</h2> */}
        </ImageContainer>
      </HeroSection>
      <FuncionalidadesGrid />
      <BeneficiosRemoto />
      <TextContainer>
        <MainTitle>
          Veja nosso aplicatvo 
        </MainTitle>
        <Subtitle>Faça o dowloand e tenha o seu condominio na palma da sua mao</Subtitle>
        <img  
          src={ AppLogo}
        />
      </TextContainer>
    </>
  );
};

export default ControleAcessoInteligente;
