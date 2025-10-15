import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f5f7fa;
  padding: 80px 0;
  text-align: center;
`;

const Subtitle = styled.h4`
  color: #0056b3;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #0b3a66;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-weight: 600;
    color: #0056b3;
    font-size: 18px;
  }

  h3 {
    font-size: 20px;
    color: #0b3a66;
  }

  p {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
`;

export const WhyChooseUs = () => {
  return (
    <Section>
      <Subtitle>ALGUNS MOTIVOS</Subtitle>
      <Title>Por que escolher a Conecta Mais</Title>

      <Grid>
        <Item>
          <span>01</span>
          <h3>Tecnologia de Ponta</h3>
          <p>
            Utilizamos sistemas modernos e equipamentos de alta qualidade para
            garantir segurança e eficiência em cada projeto.
          </p>
        </Item>

        <Item>
          <span>02</span>
          <h3>Suporte Dedicado 24h</h3>
          <p>
            Nossa equipe está sempre pronta para atender, garantindo suporte
            técnico rápido e eficaz a qualquer hora do dia.
          </p>
        </Item>

        <Item>
          <span>03</span>
          <h3>Garantia e Confiabilidade</h3>
          <p>
            Todos os nossos serviços são realizados com garantia e total
            transparência, oferecendo segurança e confiança aos clientes.
          </p>
        </Item>

        <Item>
          <span>04</span>
          <h3>Atendimento Ágil</h3>
          <p>
            Temos uma abordagem ágil e eficiente para resolver problemas e
            implantar soluções com rapidez.
          </p>
        </Item>

        <Item>
          <span>05</span>
          <h3>Soluções Personalizadas</h3>
          <p>
            Adaptamos nossos sistemas conforme a necessidade de cada condomínio
            ou empresa, sempre com foco na praticidade.
          </p>
        </Item>

        <Item>
          <span>06</span>
          <h3>Segurança e Inovação</h3>
          <p>
            Combinamos tecnologia de ponta e inovação constante para manter
            ambientes mais seguros e conectados.
          </p>
        </Item>
      </Grid>
    </Section>
  );
};

export default WhyChooseUs;
