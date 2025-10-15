import React from "react";
import {
  Container,
  Content,
  ContentWrapper,
  ImagemColumn,
  SecurityImage,
  TextColumn,
  Title,
  Description,
  CustomButton,
  Background,
} from "./styled";
import LogoHome from "../../assets/LogoHome.png";
import Navbar from "../../components/cardNav/cardNav";
import Services from "../../components/ServicesSection/servicesSection.jsx";
import FeaturesSection from "../../components/FeatutesSection.jsx/feacturesSection.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/whyChooseUs.jsx";
import CardServices from "../../components/cardServices/cardServices.jsx";


export default function Home() {
  return (
    <Background>
      <Container>
        <Content>
          <Navbar />
          <ContentWrapper>
            <ImagemColumn>
              <SecurityImage src={LogoHome} alt="Logo-imagem-conecta" />
            </ImagemColumn>

            <TextColumn>
              <Title>CONECTA MAIS : SUA SEGURANÇA, NOSSA PRIORIDADE</Title>
              <Description>
                {" "}
                Uma empresa especializada em soluções de segurança eletrônica
                inovadoras, protegendo o que mais importa para você com
                tecnologia de ponta e atendimento dedicado.
              </Description>
              <CustomButton>SOLICITE UM ORÇAMENTO PERSONALIZADO</CustomButton>
            </TextColumn>
          </ContentWrapper>
        </Content>
      </Container>

      <CardServices />
      <FeaturesSection />
      <WhyChooseUs />
    </Background>
  );
}
