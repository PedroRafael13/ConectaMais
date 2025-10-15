import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 2;
`;

export const Content = styled.div`
  z-index: 3;
  width: 100%;
  max-width: 1100px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1.2s ease-out;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const FeaturesList = styled.ul`
  flex: 1;
  list-style: none;
  color: #fff;
  font-size: 1.1rem;
  padding-left: 0;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: 2rem;

  @media (max-width: 900px) {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 0;
    padding-top: 1rem;
  }
`;

export const FeatureItem = styled.li`
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateX(5px);
    color: #00aaff;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
