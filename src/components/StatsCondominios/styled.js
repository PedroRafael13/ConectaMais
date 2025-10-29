import styled from "styled-components";

export const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  background: #f8f9fa;
  padding: 4rem 2rem;
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  max-width: 220px;
`;

export const IconWrapper = styled.div`
  background: #e8f0ff;
  color: #0056b3;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin: 0.5rem 0 0;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
`;
