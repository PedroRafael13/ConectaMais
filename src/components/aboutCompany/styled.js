import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleBackground = styled.div`
  width: 350px;
  height: 350px;
  background-color: #ff5722;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(255, 87, 34, 0.3);

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const DecorativeLines = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Line = styled.div`
  width: 20px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transform: rotate(-45deg);
  
  &:nth-child(2) {
    width: 25px;
    margin-left: 10px;
  }
  
  &:nth-child(3) {
    width: 20px;
    margin-left: 20px;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HighlightText = styled.span`
  color: #ff5722;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
  max-width: 500px;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 80px;
  margin: 20px 0;

  @media (max-width: 480px) {
    gap: 40px;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const HireButton = styled.button`
  width: fit-content;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  color: #ff5722;
  background-color: transparent;
  border: 2px solid #ff5722;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background-color: #ff5722;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 87, 34, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 12px 32px;
    font-size: 14px;
  }
`;