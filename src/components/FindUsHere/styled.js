import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 60px 20px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #1a3a52;
  margin: 0 0 50px 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const ContactCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ContactCard = styled.div`
  background-color: #e8f4f8;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 102, 204, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 102, 204, 0.1);
  border-radius: 8px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a3a52;
  margin: 0;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;

export const MapContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const MapPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #999;
  font-weight: 500;
`;

export const MapButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);

  &:hover {
    background-color: #0052a3;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 102, 204, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 12px;
    bottom: 12px;
    right: 12px;
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  font-size: 16px;
`;