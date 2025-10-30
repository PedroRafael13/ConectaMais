import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import bgImage from "../../assets/PortariaRemota.jpg";

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background: url(${bgImage}) center/cover no-repeat;
  z-index: 1;
  filter: brightness(0.6);
`;

export const Overlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.div`
  position: absolute;
  top: 2rem;
  left: 3rem;
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .name {
    color: #fff;
    letter-spacing: 1px;
  }

  .plus {
    color: #00a8ff;
    font-size: 2.2rem;
  }
`;

export const ContentBox = styled.div`
  background: #ff7b00;
  padding: 2rem 3rem;
  border-radius: 14px;
  max-width: 400px;
  margin-left: auto;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%) rotate(-15deg);
    width: 0;
    height: 0;
    border-left: 25px solid #ff7b00;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  background: #0d1b3d;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: 0.3s ease;

  &:hover {
    background: #142a6e;
    transform: translateX(5px);
  }
`;

export const ArrowIcon = styled(FaArrowRight)`
  font-size: 1rem;
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

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
export const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 5rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #004b6d;
  margin: 0 0 1rem 0;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #5a5a5a;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: ${props => props.reverse ? '1fr 1fr' : '1fr 1fr'};
  gap: 4rem;
  margin-bottom: 5rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const TextContent = styled.div`
  animation: ${props => props.animateLeft ? fadeInLeft : fadeInRight} 0.8s ease-out;
  order: ${props => props.order || 0};
  
  @media (max-width: 968px) {
    order: 2;
  }
`;

export const ImageContent = styled.div`
  animation: ${props => props.animateLeft ? fadeInLeft : fadeInRight} 0.8s ease-out;
  order: ${props => props.order || 0};
  
  @media (max-width: 968px) {
    order: 1;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #004b6d;
  margin: 40px 0 1.5rem 0;
  line-height: 1.3;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #5a5a5a;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: #5a5a5a;
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
  
  &:before {
    content: '•';
    color: #00b5ad;
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -4px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const Card = styled.div`
  background: #f8f9fa;
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  animation: ${scaleIn} 0.8s ease-out;
  border-left: 4px solid #00b5ad;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 181, 173, 0.1);
  }
`