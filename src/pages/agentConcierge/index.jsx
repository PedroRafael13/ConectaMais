import React from "react";
// import video from "../../video/tesk.mp4";
import {
  Container,
  VideoBackground,
  Overlay,
  Content,
  TextColumn,
  FeaturesList,
  FeatureItem,
  Title,
  Description,
} from "./styled";

export default function AgentConcierge() {
  return (
    <Container>
      <VideoBackground autoPlay muted loop playsInline>
     
      </VideoBackground>

      <Overlay />

      <Content>
        <TextColumn>
          <Title>Agentes de Portaria</Title>
          <Description>
            Sua Portaria Segura <br /> 24 Horas
          </Description>
        </TextColumn>

        <FeaturesList>
          <FeatureItem>Atendimento Qualificado</FeatureItem>
          <FeatureItem>Aumento da Segurança em seu Condomínio</FeatureItem>
          <FeatureItem>Controle de Acesso de Pessoas</FeatureItem>
        </FeaturesList>
      </Content>
    </Container>
  );
}
