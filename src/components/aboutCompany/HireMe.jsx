import React from "react";
import * as S from "./styled";
import Logo from "../../assets/logo.jpg";

export default function HireMe() {
  return (
    <S.Container>
      <S.ContentWrapper>
        {/* Seção da imagem */}
        <S.ImageSection>
          <S.CircleBackground>
            <S.ProfileImage src={Logo} alt="Profile" />
          </S.CircleBackground>
          <S.DecorativeLines>
            <S.Line></S.Line>
            <S.Line></S.Line>
            <S.Line></S.Line>
          </S.DecorativeLines>
        </S.ImageSection>

        {/* Seção de conteúdo */}
        <S.TextSection>
          <S.Title>
            A <S.HighlightText>CONECTA MAIS</S.HighlightText> esta no mercado
            deste 2009
          </S.Title>

          <S.Description>
            prestando serviços de excelência no segmento de Segurança Privada e
            Eletrônica. Atendemos e cuidamos de cada cliente singularmente, ou
            seja, cada cliente é único para nós. Nosso objetivo é avaliar os
            riscos calculados, afim de proteger seus maiores bens, tal como a
            família, empreendimentos, projetos, patrimônio, enfim, seus sonhos.
          </S.Description>

          {/* Estatísticas */}
          <S.StatsContainer>
            <S.StatBox>
              <S.StatNumber>600+</S.StatNumber>
              <S.StatLabel>Project Completed</S.StatLabel>
            </S.StatBox>
            <S.StatBox>
              <S.StatNumber>50+</S.StatNumber>
              <S.StatLabel>Industry Covered</S.StatLabel>
            </S.StatBox>
          </S.StatsContainer>

          {/* Botão */}
          <S.HireButton>Hire Me</S.HireButton>
        </S.TextSection>
      </S.ContentWrapper>
    </S.Container>
  );
}
