import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  background: linear-gradient(rgba(0,42,84,0.85), rgba(0,42,84,0.85)),
  url("https://images.unsplash.com/photo-1582258573447-56c2f770fb64?w=1920") center/cover no-repeat;
  padding: 80px 20px;
  color: #fff;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 50px;
  font-weight: 700;
  animation: ${fadeUp} .8s ease;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardItem = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 25px;
  border-radius: 12px;
  animation: ${fadeUp} 1s ease;
  transition: .3s;

  &:hover {
    transform: translateY(-8px);
    background: rgba(255,255,255,0.10);
  }
`;

export const CardIcon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
  color: #ff9800;
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: .95rem;
  line-height: 1.6;
`;
