import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      z-index: 1;
    `}
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
`;

export const TextWrapper = styled.div`
  color: #fff;
  max-width: 600px;
`;

export const Title = styled.h1`
  background-color: #004aad;
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0.3rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  line-height: 1.6;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  background-color: #004aad;
  color: #fff;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #00337a;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? "#f5b800" : "#fff")};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${({ isActive }) => (isActive ? "#fff" : "transparent")};

  &:hover {
    transform: scale(1.2);
  }
`;