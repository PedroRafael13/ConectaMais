import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 1rem;
  background: #fff;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0a192f;
`;

export const Subtitle = styled.p`
  color: #555;
  max-width: 600px;
  margin: 0.5rem auto 3rem auto;
  font-size: 1.1rem;
`;

export const Grid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  max-width: 1100px;
`;

export const Card = styled(motion.a)`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 20px rgba(10, 25, 47, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(10, 25, 47, 0.1);
  }
`;

export const IconWrapper = styled.div`
  background: #eaf3ff;
  padding: 12px;
  border-radius: 10px;
  display: inline-flex;
  margin-bottom: 1rem;

  svg {
    height: 36px;
    width: 36px;
    color: #1e90ff;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const LearnMore = styled.span`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-weight: 600;
  color: #1e90ff;
  gap: 6px;

  svg {
    width: 18px;
    height: 18px;
    color: #1e90ff;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
