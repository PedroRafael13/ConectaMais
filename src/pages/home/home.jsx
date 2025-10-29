import React from "react";
import { Header } from "../../components/cardNav/header";
import Carousel from "../../components/Carrossel/carrossel";
import HireMe from "../../components/aboutCompany/HireMe";
import StatsCondominios from "../../components/StatsCondominios/StatsCondominios";
import CondominiosGallery from "../../components/CondominiosGallery/condominiosGallery";
import { PageContainer } from "./styled";
import FindUsHere from "../../components/FindUsHere/FindUsHere";
import WhyChooseUs from "../../components/WhyChooseUs/whyChooseUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <HireMe />
      <WhyChooseUs />
      <PageContainer>
        <StatsCondominios />
        <CondominiosGallery />
        <FindUsHere />
      </PageContainer>
    </div>
  );
}
