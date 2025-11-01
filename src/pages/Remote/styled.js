import styled, { keyframes } from 'styled-components';

// Animações
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const glowAnimation = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
`;

const slideInDiagonal = keyframes`
  from {
    opacity: 0;
    transform: skewX(-10deg) translateX(100px);
  }
  to {
    opacity: 1;
    transform: skewX(0) translateX(0);
  }
`;

// Styled Components
export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 5rem;
  background: #ffffff;
  position: relative;
  z-index: 2;
  animation: ${fadeInLeft} 1s ease-out;

  @media (max-width: 968px) {
    padding: 3rem 2rem;
    min-height: 400px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #004b6d;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -1px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #004b6d;
  margin: 0;
  font-weight: 400;
  line-height: 1.6;
  animation: ${fadeInUp} 0.8s ease-out 0.4s backwards;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DiagonalDivider = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-top: 100vh solid #00b5ad;
  transform: translateX(-30px);
  z-index: 1;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  background-image: url('https://blog.townsq.com.br/wp-content/uploads/2019/12/portaria-remota.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: ${fadeInRight} 1s ease-out;

  /* Adiciona um overlay escuro para o texto branco se destacar */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Overlay preto com 40% de opacidade */
  }

  @media (max-width: 968px) {
    min-height: 400px;
  }
`;

export const SecurityIcon = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  color: rgba(255, 255, 255, 0.9);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${floatAnimation} 4s ease-in-out infinite;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const FingerprintIcon = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  color: rgba(255, 255, 255, 0.8);
  top: 20%;
  right: 10%;
  animation: ${slideInDiagonal} 1s ease-out 0.3s backwards, ${glowAnimation} 3s ease-in-out infinite;
  z-index: 3;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 15%;
    right: 5%;
  }
`;

export const PeopleIcon = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  color: rgba(255, 255, 255, 0.85);
  bottom: 20%;
  right: 15%;
  animation: ${slideInDiagonal} 1s ease-out 0.5s backwards, ${glowAnimation} 3s ease-in-out infinite 0.5s;
  z-index: 3;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    bottom: 15%;
    right: 8%;
  }
`;

export const GlobeIcon = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  color: rgba(255, 255, 255, 0.75);
  top: 15%;
  right: 5%;
  animation: ${slideInDiagonal} 1s ease-out 0.7s backwards, ${glowAnimation} 3s ease-in-out infinite 1s;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.3));
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 10%;
    right: 2%;
  }
`;