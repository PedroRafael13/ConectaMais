import React, { useState, useEffect } from "react";
import {
  CarouselContainer,
  Slide,
  Video,
  Image,
  Overlay,
  TextWrapper,
  Title,
  Description,
  Button,
  Dots,
  Dot,
} from "./styled";

import Slide1 from "../../assets/image.png";
import Slide2 from "../../assets/LogoHome.png";
import VideoBg from "../../video/OFICIALVIDEO.mp4";

export default function Carousel() {
  const slides = [
    {
      type: "video",
      src: VideoBg,
      title: "Conecta Mais",
      description:
        "Uma das empresas de segurança e tecnologia que mais cresce no Brasil!",
      buttonText: "Saiba mais",
    },
    { 
      type: "image", 
      src: Slide1,
      title: "Especialistas em Segurança, Focados em Proteger Você",
      description: "Combinamos a expertise de nossos profissionais com tecnologia de ponta para oferecer um serviço de vigilância completo e confiável.",
      buttonText: "Conheça nossa equipe"
    },
    { 
      type: "image", 
      src: Slide2,
      title: "Central de Monitoramento: O Coração da Sua Estratégia de Segurança",
      description: "Profissionais dedicados e sistemas avançados trabalham em sinergia para analisar, gerenciar e responder a todos os eventos do seu patrimônio.",
      buttonText: "Saiba mais sobre monitoramento"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide key={index} isActive={index === currentIndex}>
          {slide.type === "video" ? (
            <Video src={slide.src} autoPlay loop muted playsInline />
          ) : (
            <Image src={slide.src} alt={`Slide ${index + 1}`} />
          )}

          {/* Overlay e texto para todos os slides que têm título */}
          {slide.title && (
            <Overlay>
              <TextWrapper>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                {slide.buttonText && <Button>{slide.buttonText}</Button>}
              </TextWrapper>
            </Overlay>
          )}
        </Slide>
      ))}

      <Dots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Dots>
    </CarouselContainer>
  );
}