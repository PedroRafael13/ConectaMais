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
  Section,
  TextContent,
  SectionTitle,
  Paragraph,
  ImageContent,
  Card,
  List,
  ListItem,
  Image,
  PageContainer,
  MainTitle,
  Subtitle,
} from "./styled";
import { Header } from "../../components/cardNav/header";
import BeneficiosPortaria from "./BeneficiosPortaria";

export default function AgentConcierge() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SectionContainer>
        <BackgroundImage />
        <Overlay>
          <ContentBox>
            <Title>SEGURANÇA</Title>
            <Button onClick={() => navigate("/solicitar-orcamento")}>
              SOLICITAR PROPOSTA <ArrowIcon />
            </Button>
          </ContentBox>
        </Overlay>
      </SectionContainer>
      <PageContainer>
        {/* Seção 1: Estudo de análise de risco */}
        <Section>
          <TextContent animateLeft order={1}>
            <SectionTitle>Estudo de análise de risco</SectionTitle>
            <Paragraph>
              Na Conecta Mais, sua segurança vem em primeiro lugar. Nossa equipe
              de portaria é formada por profissionais treinados regularmente
              para atuar com estratégia, eficiência e total compromisso com a
              proteção pessoal e patrimonial do seu condomínio..
            </Paragraph>
            <Paragraph>
              Atuamos com estratégia, eficiência e total compromisso com a
              proteção pessoal e patrimonial do seu condomínio, proporcionando
              tranquilidade, confiança e excelência no atendimento diário.
            </Paragraph>
          </TextContent>

          <ImageContent animateRight order={2}>
            <Image
              src="https://conectamaistech.com.br/wp-content/uploads/home-equipe-profissional-1.png.webp"
              alt="Profissional de segurança em instalação industrial"
            />
          </ImageContent>
        </Section>

        {/* Seção 2: Uso de software regulatório */}

        <BeneficiosPortaria />
        {/* Seção 3: Uso de Seguramente */}
        <Section>
          <ImageContent animateLeft order={1}>
            <Image
              src="https://conectamaistech.com.br/wp-content/uploads/home-tecnologias-inovadoras.png.webp"
              alt="Sistema de segurança"
            />
          </ImageContent>

          <TextContent animateRight order={2}>
            <SectionTitle>Profissionais Habilitadose</SectionTitle>
            <Paragraph>
              Atuamos com as tecnologias mais avançadas do mercado, garantindo
              mais segurança, agilidade e controle para o seu condomínio.
              Utilizamos recursos como Câmeras Perimetrais com Inteligência
              Artificial, Câmeras Corporais, Aplicativos de Controle de Acesso,
              Monitoramento Remoto, Leituras Inteligentes de Placas (LPR),
              Rádios de Comunicação Digital e Sistemas Integrados de Segurança.
            </Paragraph>

            <Paragraph>
              Todo o nosso sistema segue normas e regulamentações vigentes,
              assegurando qualidade, padronização e conformidade operacional:
            </Paragraph>

            <List>
              <ListItem>Procedimentos operacionais padronizados (POP)</ListItem>
              <ListItem>
                Treinamentos contínuos e capacitação obrigatória
              </ListItem>
              <ListItem>
                Registro e controle de acesso com base em normas de segurança
              </ListItem>
              <ListItem>
                Protocolos de resposta rápida e gerenciamento de incidentes
              </ListItem>
              <ListItem>
                Monitoramento e auditoria de atividades em tempo real
              </ListItem>
              <ListItem>
                Conformidade com LGPD e políticas de segurança da informação
              </ListItem>
            </List>
          </TextContent>
        </Section>
      </PageContainer>
    </>
  );
}
