import { styled } from "styled-components";

//  background : #3570D9;

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`;

export const Background = styled.div`
    `

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  display: flex;
  min-height: 100vh;
  background : #3570D9;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ImagemColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SecurityImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  max-height: 500px;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: #FFFF;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #FFF;
  line-height: 1.6;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;
export const CustomButton = styled.button`
  background-color: #007bff;
  padding: 15px 30px;
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    padding: 12px 20px;
  }
`;
