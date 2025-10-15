import React, { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

// Styled Components
const Container = styled.section`
  max-width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;
  /* Removido o pseudo-elemento ::before e a animação rotate */
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #4a90e2;
  margin-bottom: 15px;
  /* Mantida a animação fadeInDown, se desejado */
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.2;
  /* Mantida a animação fadeInUp, se desejado */
  animation: fadeInUp 0.8s ease-out 0.2s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  /* Mantida a animação fadeInUp, se desejado */
  animation: fadeInUp 0.8s ease-out 0.4s both;
`;

const Grid = styled.div`
  display: flex;
  /* Força uma única coluna em todas as resoluções */
  grid-template-columns: 1fr;
  gap: 30px; /* Mantém o espaçamento do gap */
  position: relative;
  z-index: 1;
  /* Removido media query para 768px, pois sempre será 1 coluna */
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.isHovered
      ? `0 20px 40px rgba(0, 0, 0, 0.12)`
      : `0 8px 20px rgba(0, 0, 0, 0.06)`};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  /* Mantida a animação fadeInScale, se desejado */
  animation: fadeInScale 0.6s ease-out ${(props) => props.delay}s both;
  transform: ${(props) =>
    props.isHovered
      ? "translateY(-10px) scale(1.02)"
      : "translateY(0) scale(1)"};
  max-width: 320px;
  margin: 0 auto;
  min-height: 280px;
  display: flex;
  align-items: center;

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.color};
    transform: scaleX(${(props) => (props.isHovered ? 1 : 0)});
    transition: transform 0.3s ease;
  }
`;

const Content = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${(props) => props.color}15;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: ${(props) => props.color}25;
  }
`;

const Icon = styled.span`
  font-size: 32px;
  filter: grayscale(0.3);
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${(props) => props.color};
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const LearnMore = styled(Link)`
 display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color};
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none; // remove o sublinhado padrão do link

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.isHovered ? '100%' : '0'};
    height: 2px;
    background: ${props => props.color};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.color};
  }
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: translateX(8px);
  }
`;

const FloatingCircle = styled.div`
  /* Removido completamente, pois o usuário pediu para remover a 'imagem' (fundo animado) */
  display: none;
`;

export const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Portaria Remota",
      description:
        "Controle total de acessos com monitoramento 24h e sistema de validação facial.",
      icon: "🛡️",
      color: "#4A90E2",
       link: '/portfolio' // adicione o caminho da página
    },
    {
      id: 2,
      title: "Monitoramento Inteligente",
      description:
        "Câmeras com inteligência perimetral e alertas em tempo real via app.",
      icon: "⏱️",
      color: "#7B68EE",
       link: '/portaria-remota' // adicione o caminho da página
    },
    {
      id: 3,
      title: "Controle de Acesso",
      description:
        "RFID, biometria e reconhecimento facial integrados com histórico de entradas e saídas.",
      icon: "🔑",
      color: "#FF6B6B",
       link: '/portaria-remota' // adicione o caminho da página
    },
    {
      id: 4,
      title: "Automação de Portões",
      description:
        "Portões automáticos, sensores e integração completa com a portaria remota.",
      icon: "⚙️",
      color: "#4ECDC4",
       link: '/portaria-remota' // adicione o caminho da página
    },
  ];

  return (
    <Container>
      <Header>
        <Subtitle>Nossas Soluções</Subtitle>
        <Title>Tecnologia de Ponta para Sua Segurança</Title>
        <Description>
          Oferecemos as mais avançadas soluções em segurança e automação,
          combinando inteligência artificial e monitoramento em tempo real.
        </Description>
      </Header>

      <Grid>
        {features.map((feature, index) => (
          <Card
            key={feature.id}
            onMouseEnter={() => setHoveredCard(feature.id)}
            onMouseLeave={() => setHoveredCard(null)}
            isHovered={hoveredCard === feature.id}
            color={feature.color}
            delay={index * 0.1}
          >
            <Content>
              <IconWrapper color={feature.color}>
                <Icon>{feature.icon}</Icon>
              </IconWrapper>

              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>

              <LearnMore
                href={feature.link}
                isHovered={hoveredCard === feature.id}
                color={feature.color}
              >
                Saiba mais
                <Arrow>→</Arrow>
              </LearnMore>
            </Content>

            {/* FloatingCircle removido ou ocultado conforme solicitado */}
            <FloatingCircle
              color={feature.color}
              isHovered={hoveredCard === feature.id}
            />
          </Card>
        ))}
      </Grid>

    </Container>
  );
};

export default FeaturesSection;
