import React from "react";
import { Building2, Users, Hammer, Shield } from "lucide-react";
import {
  StatsSection,
  StatCard,
  IconWrapper,
  Number,
  Title,
  Subtitle,
} from "./styled";

export default function StatsCondominios() {
  const stats = [
    {
      icon: <Building2 size={32} />,
      number: "12+",
      title: "Condomínios",
      subtitle: "Projetos em Manaus",
    },
    {
      icon: <Users size={32} />,
      number: "5.5K+",
      title: "Moradores Satisfeitos",
      subtitle: "Avaliações positivas",
    },
    {
      icon: <Hammer size={32} />,
      number: "268+",
      title: "Condomínios Entregues",
      subtitle: "Obras finalizadas com excelência",
    },
    {
      icon: <Shield size={32} />,
      number: "24h",
      title: "Segurança Garantida",
      subtitle: "Serviços de proteção e monitoramento",
    },
  ];

  return (
    <StatsSection>
      {stats.map((item, index) => (
        <StatCard key={index}>
          <IconWrapper>{item.icon}</IconWrapper>
          <Number>{item.number}</Number>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </StatCard>
      ))}
    </StatsSection>
  );
}
