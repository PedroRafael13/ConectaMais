import styled from "styled-components";

export const GallerySection = styled.section`
  background: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

export const GalleryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 3rem;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background: #f8f9fa;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.25rem;
`;

export const CardSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.75rem;
`;

export const CardPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0056b3;
  margin: 0;
`;
