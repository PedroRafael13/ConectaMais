import styled from "styled-components";
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
