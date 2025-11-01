
import styled from 'styled-components';

// ============================================
// VARIÁVEIS DE CORES
// ============================================
export const colors = {
  primary: '#FF7A3D',
  darkBg: '#0F1419',
  darkBg2: '#1A1F2E',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  darkGray: '#333333',
  textDark: '#1A1A1A',
  textLight: '#666666',
  accentBlue: '#2E7D9E',
};

// ============================================
// VARIÁVEIS DE TIPOGRAFIA
// ============================================
export const typography = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontFamilyHeading: "'Poppins', 'Segoe UI', sans-serif",
  sizes: {
    h1: '48px',
    h2: '36px',
    h3: '28px',
    h4: '24px',
    body: '16px',
    small: '14px',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// ============================================
// VARIÁVEIS DE ESPAÇAMENTO
// ============================================
export const spacing = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};

// ============================================
// VARIÁVEIS DE BREAKPOINTS
// ============================================
export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

// ============================================
// COMPONENTES ESTILIZADOS
// ============================================

// Container Principal
export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 ${spacing.md};
  }
`;

// ============================================
// HEADER E NAVEGAÇÃO
// ============================================

export const TopBar = styled.div`
  background-color: ${colors.darkBg};
  color: ${colors.white};
  padding: ${spacing.sm} ${spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${typography.sizes.small};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: ${spacing.sm};
    text-align: center;
  }
`;

export const TopBarLeft = styled.div`
  display: flex;
  gap: ${spacing.xl};
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: ${spacing.sm};
  }
`;

export const TopBarRight = styled.div`
  display: flex;
  gap: ${spacing.lg};
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: ${spacing.sm};
  }
`;

export const NavBar = styled.nav`
  background-color: ${colors.white};
  padding: ${spacing.md} ${spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: ${spacing.md};
  }
`;

export const Logo = styled.div`
  font-size: ${typography.sizes.h3};
  font-weight: ${typography.weights.bold};
  color: ${colors.primary};
  font-family: ${typography.fontFamilyHeading};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};

  img {
    height: 40px;
    width: auto;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${spacing.xl};
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: ${spacing.md};
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${colors.textDark};
    font-weight: ${typography.weights.medium};
    font-size: ${typography.sizes.body};
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const CTAButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 4px;
  font-size: ${typography.sizes.body};
  font-weight: ${typography.weights.semibold};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #FF6A1A;
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

// ============================================
// HERO SECTION
// ============================================

export const HeroSection = styled.section`
  background: linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.darkBg2} 100%);
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><radialGradient id="grad1" cx="20%" cy="50%"><stop offset="0%" style="stop-color:rgba(46,125,158,0.3);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(15,20,25,0);stop-opacity:1" /></radialGradient></defs><rect fill="%230F1419" width="1200" height="600"/><circle cx="200" cy="150" r="100" fill="url(%23grad1)"/><circle cx="1000" cy="400" r="150" fill="url(%23grad1)"/></svg>');
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  padding: ${spacing.xxxl} ${spacing.lg};
  position: relative;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xxl} ${spacing.md};
    min-height: 400px;
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: ${typography.sizes.h1};
  font-weight: ${typography.weights.bold};
  margin-bottom: ${spacing.lg};
  line-height: 1.2;
  font-family: ${typography.fontFamilyHeading};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${typography.sizes.body};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${spacing.xxl};
  line-height: 1.6;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.lg};
  margin-top: ${spacing.xxl};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: ${spacing.lg};
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: ${spacing.md};
  }

  h3 {
    font-size: ${typography.sizes.h4};
    font-weight: ${typography.weights.semibold};
    margin-bottom: ${spacing.sm};
  }

  p {
    font-size: ${typography.sizes.small};
    color: rgba(255, 255, 255, 0.7);
  }
`;

// ============================================
// SEÇÃO "POR QUE ESCOLHER"
// ============================================

export const WhyChooseSection = styled.section`
  background-color: ${colors.white};
  padding: ${spacing.xxxl} ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xxl} ${spacing.md};
  }
`;

export const WhyChooseContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xxxl};
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${spacing.xxl};
  }
`;

export const WhyChooseText = styled.div`
  h2 {
    font-size: ${typography.sizes.h2};
    font-weight: ${typography.weights.bold};
    margin-bottom: ${spacing.md};
    line-height: 1.2;
    font-family: ${typography.fontFamilyHeading};

    span {
      color: ${colors.primary};
    }
  }

  p {
    font-size: ${typography.sizes.body};
    color: ${colors.textLight};
    line-height: 1.8;
    margin-bottom: ${spacing.lg};
  }
`;

export const WhyChooseImage = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.lg};
  margin-top: ${spacing.xxl};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const StatBox = styled.div`
  text-align: center;

  .stat-number {
    font-size: 48px;
    font-weight: ${typography.weights.bold};
    color: ${colors.primary};
    font-family: ${typography.fontFamilyHeading};
  }

  .stat-label {
    font-size: ${typography.sizes.body};
    color: ${colors.textDark};
    margin-top: ${spacing.sm};
    font-weight: ${typography.weights.medium};
  }
`;

// ============================================
// SEÇÃO DE SERVIÇOS
// ============================================

export const ServicesSection = styled.section`
  background-color: ${colors.lightGray};
  padding: ${spacing.xxxl} ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xxl} ${spacing.md};
  }

  h2 {
    text-align: center;
    font-size: ${typography.sizes.h2};
    font-weight: ${typography.weights.bold};
    margin-bottom: ${spacing.xxxl};
    color: ${colors.textDark};
    font-family: ${typography.fontFamilyHeading};
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.xxl};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background-color: ${colors.white};
  padding: ${spacing.xxl};
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .service-icon {
    font-size: 48px;
    margin-bottom: ${spacing.lg};
    display: inline-block;
  }

  h3 {
    font-size: ${typography.sizes.h4};
    font-weight: ${typography.weights.semibold};
    color: ${colors.textDark};
    margin-bottom: ${spacing.md};
    font-family: ${typography.fontFamilyHeading};
  }

  p {
    font-size: ${typography.sizes.body};
    color: ${colors.textLight};
    line-height: 1.6;
  }
`;

// ============================================
// FOOTER
// ============================================

export const Footer = styled.footer`
  background-color: ${colors.darkBg};
  color: ${colors.white};
  padding: ${spacing.xxxl} ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xxl} ${spacing.md};
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.xxl};
  margin-bottom: ${spacing.xxxl};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  h4 {
    font-size: ${typography.sizes.h4};
    font-weight: ${typography.weights.semibold};
    margin-bottom: ${spacing.lg};
    font-family: ${typography.fontFamilyHeading};
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: ${spacing.md};

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: ${typography.sizes.body};
        transition: color 0.3s ease;

        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }

  p {
    font-size: ${typography.sizes.body};
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${spacing.xl};
  text-align: center;
  font-size: ${typography.sizes.small};
  color: rgba(255, 255, 255, 0.6);
`;

// ============================================
// UTILITÁRIOS
// ============================================

export const SectionTitle = styled.h2`
  font-size: ${typography.sizes.h2};
  font-weight: ${typography.weights.bold};
  color: ${colors.textDark};
  margin-bottom: ${spacing.lg};
  font-family: ${typography.fontFamilyHeading};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${typography.sizes.h3};
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
  margin: ${spacing.xxl} 0;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.md};
`;

export const TextCenter = styled.div`
  text-align: center;
`;