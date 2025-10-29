import React from "react";
import * as S from "./styled";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FindUsHere({ mapContent }) {
  return (
    <S.Container>
      <S.Wrapper>
        {/* Título */}
        <S.Title>Encontre-nós</S.Title>

        {/* Cards de contato */}
        <S.ContactCardsContainer>
          {/* Card Phone */}
          <S.ContactCard>
            <S.IconWrapper>
              <Phone size={32} color="#0066cc" />
            </S.IconWrapper>
            <S.CardContent>
              <S.CardTitle>Phone</S.CardTitle>
              <S.CardText>(23) 98221-4414</S.CardText>
            </S.CardContent>
          </S.ContactCard>

          {/* Card Email */}
          <S.ContactCard>
            <S.IconWrapper>
              <Mail size={32} color="#0066cc" />
            </S.IconWrapper>
            <S.CardContent>
              <S.CardTitle>Email</S.CardTitle>
              <S.CardText>contato@conectamaistech.com</S.CardText>
            </S.CardContent>
          </S.ContactCard>

          {/* Card Location */}
          <S.ContactCard>
            <S.IconWrapper>
              <MapPin size={32} color="#0066cc" />
            </S.IconWrapper>
            <S.CardContent>
              <S.CardTitle>Location</S.CardTitle>
              <S.CardText>R 45 19, Manaus, parque 10</S.CardText>
            </S.CardContent>
          </S.ContactCard>
        </S.ContactCardsContainer>

        {/* Mapa e botão */}
        <S.MapContainer>
          {mapContent ? (
            mapContent
          ) : (
            <S.MapPlaceholder>
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1761707699334!6m8!1m7!1s3FJ3AQm-6epJr8zfDsFTew!2m2!1d-3.077775502123123!2d-60.0121660393069!3f23.832542770543114!4f-3.7590609396364982!5f0.7820865974627469"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização no mapa"
              />
            </S.MapPlaceholder>
          )}
          <S.MapButton>
            View in Google Maps
            <S.ArrowIcon>→</S.ArrowIcon>
          </S.MapButton>
        </S.MapContainer>
      </S.Wrapper>
    </S.Container>
  );
}
