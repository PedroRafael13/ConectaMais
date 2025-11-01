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
} from "./Beneficio";
import { Header } from "../../components/cardNav/header";

export default function BeneficiosRemoto() {
  return (
    <>
      <PageContainer>
        {/* Seção 1: Estudo de análise de risco */}
        <Section>
          <TextContent animateLeft order={1}>
            <SectionTitle>Reconhecimento Facial</SectionTitle>
            <Paragraph>
              Controle de acesso sem contato físico, diminuindo o risco de
              contágio de doenças em empresas, universidades e condomínios. A
              linha conta ainda com medição térmica, reconhecimento de face com
              máscara e a leitura mais rápida do mercado, evitando filas e
              aglomerações no acesso.
            </Paragraph>
            <Paragraph>
              Além disso, conta com tecnologia avançada de medição térmica,
              reconhecimento facial mesmo com o uso de máscara e uma das
              leituras mais rápidas do mercado. Tudo isso garante segurança,
              eficiência e fluxo contínuo de pessoas, evitando filas e
              aglomerações durante o acesso.
            </Paragraph>
          </TextContent>

          <ImageContent animateRight order={2}>
            <Image
              src="https://conectamaistech.com.br/wp-content/uploads/pr-03.jpg.webp"
              alt="Profissional de segurança em instalação industrial"
            />
          </ImageContent>
        </Section>

        {/* Seção 2: Uso de software regulatório */}

        {/* Seção 3: Uso de Seguramente */}
        <Section>
          <ImageContent animateLeft order={1}>
            <Image
              src="https://conectamaistech.com.br/wp-content/uploads/pr-02.jpg.webp"
              alt="Sistema de segurança"
            />
          </ImageContent>

          <TextContent animateRight order={2}>
            <SectionTitle>Abertura por Aproximação</SectionTitle>
            <Paragraph>
              diminuindo o risco de contágio de doenças em empresas,
              universidades e condomínios. A linha conta ainda com medição
              térmica, reconhecimento de face com máscara e a leitura mais
              rápida do mercado, evitando filas e aglomerações no acesso.
            </Paragraph>

            <Paragraph>
              Todo o nosso sistema segue normas e regulamentações vigentes,
              assegurando qualidade, padronização e conformidade operacional:
            </Paragraph>

            <List>
              <ListItem>Conveniência e rapide</ListItem>
              <ListItem>Mais segurança</ListItem>
              <ListItem>Fluxo de entrada mais ágil</ListItem>
              <ListItem>Sem contato físico</ListItem>
              <ListItem>Redução de intervenção humana</ListItem>
              <ListItem>Resistência e durabilidade</ListItem>
            </List>
          </TextContent>
        </Section>

        <Section>
          <TextContent animateLeft order={1}>
            <SectionTitle>Controle Remoto</SectionTitle>
            <Paragraph>
              Controle de acesso sem contato físico, diminuindo o risco de
              contágio de doenças em empresas, universidades e condomínios. A
              linha conta ainda com medição térmica, reconhecimento de face com
              máscara e a leitura mais rápida do mercado, evitando filas e
              aglomerações no acesso.
            </Paragraph>
            <Paragraph>
              A abertura por aproximação garante mais segurança, praticidade e
              agilidade no controle de acesso, permitindo que moradores,
              colaboradores e visitantes entrem no ambiente apenas com a
              aproximação de um cartão, chaveiro ou TAG, sem necessidade de
              contato físico ou digitação de senhas. Essa tecnologia reduz
              riscos de invasões, elimina o desgaste de equipamentos e registra
              todas as entradas e saídas, possibilitando maior controle e
              rastreabilidade. Além disso, oferece uma experiência moderna e
              eficiente, ideal para condomínios e empresas que buscam segurança
              e rapidez no fluxo de pessoas e veículos.
            </Paragraph>
          </TextContent>

          <ImageContent animateRight order={2}>
            <Image
              src="https://conectamaistech.com.br/wp-content/uploads/pr-01.jpg.webp"
              alt="Profissional de segurança em instalação industrial"
            />
          </ImageContent>
        </Section>
      </PageContainer>
    </>
  );
}
