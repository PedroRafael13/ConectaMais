import React from "react";
import {
  GallerySection,
  GalleryTitle,
  GalleryGrid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  CardSubtitle,
} from "./styled";

export default function CondominiosGallery() {
  const condominios = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      title: "Condomínio Manauara",
      subtitle: "Zona Centro-Sul",
      price: "R$ 195.700",
    },
    {
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
      title: "Condomínio Calypso",
      subtitle: "Ponta Negra",
      price: "R$ 1.500.000",
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
      title: "Condomínio Eucalipt",
      subtitle: "Parque 10",
      price: "R$ 2.300.000",
    },
    {
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
      title: "Condomínio Dom Persia",
      subtitle: "Aleixo",
      price: "R$ 357.500",
    },
  ];

  return (
    <GallerySection>
      <GalleryTitle>Condomínios com Segurança e Conforto</GalleryTitle>
      <GalleryGrid>
        {condominios.map((cond, index) => (
          <Card key={index}>
            <CardImage src={cond.image} alt={cond.title} />
            <CardContent>
              <CardTitle>{cond.title}</CardTitle>
              <CardSubtitle>{cond.subtitle}</CardSubtitle>
              <CardPrice>{cond.price}</CardPrice>
            </CardContent>
          </Card>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
}
