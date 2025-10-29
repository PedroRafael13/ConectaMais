import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SectionContainer,
  BackgroundImage,
  Overlay,
  Logo,
  ContentBox,
  Title,
  Button,
  ArrowIcon,
} from "./styled";
import { Header } from "../../components/cardNav/header"

export default function AgentConcierge() {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <SectionContainer>
        <BackgroundImage />
        <Overlay>
          <Logo>
            <span className="name">CONECTA</span>
            <span className="plus">+</span>
          </Logo>

          <ContentBox>
            <Title>SEGURANÇA</Title>
            <Button onClick={() => navigate("/solicitar-orcamento")}>
              SOLICITAR PROPOSTA <ArrowIcon />
            </Button>
          </ContentBox>
        </Overlay>
      </SectionContainer>
    </>
  );
}
