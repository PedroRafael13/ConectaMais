import React from "react";
import {
  SectionContainer,
  SectionTitle,
  CardsGrid,
  CardItem,
  CardIcon,
  CardTitle,
  CardText
} from "./beneficiosStyled";

import { FaUserShield, FaClock, FaShieldAlt, FaTools } from "react-icons/fa";

export default function BeneficiosPortaria() {
  return (
    <SectionContainer>
      <SectionTitle>Benefícios dos Agentes de Portaria</SectionTitle>

      <CardsGrid>
        <CardItem>
          <CardIcon><FaUserShield /></CardIcon>
          <CardTitle>Profissionais Capacitados</CardTitle>
          <CardText>
            Treinamentos constantes para garantir atendimento eficiente,
            segurança e postura profissional em todas as situações.
          </CardText>
        </CardItem>

        <CardItem>
          <CardIcon><FaClock /></CardIcon>
          <CardTitle>Gestão Profissional 24h</CardTitle>
          <CardText>
            Supervisão ativa e suporte operacional 24 horas por dia, 7 dias por semana.
          </CardText>
        </CardItem>

        <CardItem>
          <CardIcon><FaShieldAlt /></CardIcon>
          <CardTitle>Experiência em Segurança</CardTitle>
          <CardText>
            Equipe especializada com conhecimento prático em protocolos de
            segurança, gestão de riscos e resposta rápida a ocorrências.
          </CardText>
        </CardItem>

        <CardItem>
          <CardIcon><FaTools /></CardIcon>
          <CardTitle>Profissionais Equipados</CardTitle>
          <CardText>
            Recursos modernos, uniforme completo e equipamentos de apoio
            para atuação eficiente e segura.
          </CardText>
        </CardItem>
      </CardsGrid>
    </SectionContainer>
  );
}
