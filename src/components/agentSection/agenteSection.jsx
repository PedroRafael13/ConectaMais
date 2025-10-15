import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "../../assets/image.png"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem 8%;
  background: linear-gradient(135deg, #0a0a1f 0%, #111132 100%);
  color: #fff;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextBox = styled.div`
  max-width: 550px;
  animation: ${fadeIn} 1.2s ease forwards;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  line-height: 1.2;
  font-weight: 700;
  color: #ffffff;

  span {
    color: #ff7b00;
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin: 1.5rem 0;
  color: #cfcfe1;
  font-size: 1rem;
  line-height: 1.6;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #0066ff 0%, #8800ff 100%);
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 102, 255, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(136, 0, 255, 0.6);
  }
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 260px;
    height: 200px;
    object-fit: cover;
    border-radius: 16px;
    transition: 0.4s ease;
    border: 2px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: scale(1.05);
      border-color: #ff7b00;
      box-shadow: 0 0 25px rgba(255, 123, 0, 0.5);
    }
  }
`;

const Label = styled.span`
  position: absolute;
  bottom: 10px;
  left: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 8px;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

const AgentSection = () => {
  return (
    <Section>
      <TextBox>
        <Title>
          Um Serviço Pensado para
          <span>Proteger Pessoas</span>
        </Title>
        <Description>
          Com a Conecta Mais, o serviço de portaria reúne Profissionais
          Capacitados, que passam periodicamente por treinamentos específicos
          para que a atuação seja Estratégica, Eficaz e que possa garantir sua
          Segurança Pessoal e Patrimonial.
        </Description>
        <Button>Solicite seu Orçamento</Button>
      </TextBox>

      <ImageGrid>
        <ImageBox>
          <img src="/img/porteiro-radio.jpg" alt="Profissional com rádio" />
          <Label>Profissional Capacitado</Label>
        </ImageBox>

        <ImageBox>
          <img src={Image} alt="Vigilante de moto" />
          <Label>Equipe Profissional</Label>
        </ImageBox>
      </ImageGrid>
    </Section>
  );
};

export default AgentSection;
