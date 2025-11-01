import styled, { keyframes } from "styled-components";

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const hoverScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.03);
  }
`;

// Cores
const primaryBlue = "#007bff";
const primaryOrange = "#ff6600";
const darkText = "#333333";
const lightText = "#666666";
const white = "#ffffff";

// Styled Components
export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${white};
  font-family: "Roboto", sans-serif;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: ${white};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease-out;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  color: ${primaryOrange};
  font-size: 2.5rem;
  margin-bottom: 1rem;

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${darkText};
  margin: 0 0 0.5rem 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${lightText};
  line-height: 1.5;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const PrimaryButton = styled.button`
  background-color: ${primaryBlue};
  color: ${white};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.4);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 6px 15px rgba(0, 123, 255, 0.6);
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${white};
  color: ${darkText};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border: 2px solid ${darkText};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${primaryBlue};
    color: ${primaryBlue};
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #0b3a66;
`;

export const Subtitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0056b3;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;
