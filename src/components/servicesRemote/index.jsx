import React from 'react';
import {
  SectionContainer,
  GridContainer,
  FeatureCard,
  IconWrapper,
  CardTitle,
  CardDescription,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  Title,
  Subtitle,
} from './styled';

// Dados das funcionalidades (6 itens da imagem)
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-4.17 3.13-7.64 7-7.93v15.86zM12 4.07c3.95.49 7 3.85 7 7.93 0 4.17-3.13 7.64-7 7.93V4.07z" fill="currentColor" />
        <path d="M12 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" fill="white" />
      </svg>
    ),
    title: 'Antena Veicular',
    description: 'Abertura de portão por aproximação, via sinal da tag veicular (moradores e visitantes)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 1h-8C6.67 1 6 1.67 6 2.5v19c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-19c0-.83-.67-1.5-1.5-1.5zm-8 1.5h8v19h-8v-19zM12 20.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor" />
      </svg>
    ),
    title: 'App Conecta Mais',
    description: 'Gestão Completa pelo Aplicativo, em qualquer lugar',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3H9c-1.1 0-2 .9-2 2v4h2V5h6v4h2V5c0-1.1-.9-2-2-2zM7 11H5v2h2v-2zm12 0h-2v2h2v-2zM7 15H5v2h2v-2zm12 0h-2v2h2v-2zM7 19H5v2h2v-2zm12 0h-2v2h2v-2zM15 11H9v10h6V11z" fill="currentColor" />
      </svg>
    ),
    title: 'Acesso via QRCode',
    description: 'Moradores liberam acesso para visitantes',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
      </svg>
    ),
    title: 'Monitoramento por Câmeras',
    description: 'Assista aos vídeos do monitoramento das câmeras do condomínio',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" />
      </svg>
    ),
    title: 'Leitores Wi-Fi',
    description: 'Instalação facilitada de Equipamentos Biométricos',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 19c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" />
      </svg>
    ),
    title: 'Acesso Biométrico',
    description: 'Controle de Acesso Biométrico para moradores e funcionários',
  },
];

export default function FuncionalidadesGrid(){
  return (
    <SectionContainer>
        <Title>Confira todos os Recurso</Title>
         <Subtitle>Confira todos os Recurso</Subtitle>
      <GridContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </FeatureCard>
        ))}
      </GridContainer>
      <ButtonContainer>
        <PrimaryButton>GET A QUOTE</PrimaryButton>
        <SecondaryButton>BROWSE ALL SERVICES</SecondaryButton>
      </ButtonContainer>
    </SectionContainer>
  );
};
