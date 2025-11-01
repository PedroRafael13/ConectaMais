import React, { useState } from 'react';
import {
  Container,
  NavBar,
  CTAButton,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  FeaturesGrid,
  FeatureBox,
  WhyChooseSection,
  WhyChooseContent,
  WhyChooseText,
  WhyChooseImage,
  StatsGrid,
  StatBox,
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  Footer,
  FooterContent,
  FooterBottom,
  colors,
} from './styled'
import { Header } from '../../components/cardNav/header';
import logo from "../../assets/image2.png"

const App = () => {
   // const [menuOpen, setMenuOpen] = useState(false);

  // Dados dos serviços
  const services = [
    {
      id: 1,
      icon: '🔐',
      title: 'Controle de Acesso Facial/Térmico',
      description: 'Sem contato físico, medição térmica, reconhecimento facial com máscara e leitura rápida para evitar filas.',
    },
    {
      id: 2,
      icon: '📱',
      title: 'Super APP de Condomínio',
      description: 'Ronda 24h, Monitoramento, Reservas de Áreas Comuns, Portaria Digital e Publicidade integrada.',
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Inteligência Perimetral (SIP)',
      description: 'Redução significativa de falsos alarmes, foco em pessoas e veículos, com linha e cerca virtual.',
    },
    {
      id: 4,
      icon: '🚨',
      title: 'Central de Alarme ANM 24 Net',
      description: 'Alarme não monitorado com supervisão sem fio, 24 zonas e conexão via nuvem para acompanhamento em tempo real.',
    },
    {
      id: 5,
      icon: '📹',
      title: 'CFTV ColorHunter & Starlight',
      description: 'Imagem colorida 24h, alta resolução (4/5/8MP), visualização noturna em cores originais, LEDs amigáveis aos olhos.',
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Proteção Perimetral',
      description: 'Concertina com lâminas cortantes, Rede Laminada e Sensor de Barreira Infravermelho Ativo para cercas virtuais.',
    },
  ];

  // Dados das áreas de aplicação
  const features = [
    {
      id: 1,
      title: 'Para Escritórios',
      description: 'Controle de Acesso, Alarmes e Monitoramento 24h.',
    },
    {
      id: 2,
      title: 'Para Residências',
      description: 'CFTV Starlight, Alarmes ANM 24 Net, Portões Automáticos.',
    },
    {
      id: 3,
      title: 'Para Condomínios',
      description: 'Biometria, Cancelas Automáticas, Super APP de Gestão.',
    },
    {
      id: 4,
      title: 'Para Indústrias',
      description: 'Inteligência Perimetral (SIP), CFTV Alta Resolução, Controle Avançado.',
    },
  ];

  // Dados das estatísticas
  const stats = [
    {
      id: 1,
      number: '52+',
      label: 'Projetos de Segurança',
    },
    {
      id: 2,
      number: '3+',
      label: 'Anos de Experiência',
    },
    {
      id: 3,
      number: '87+',
      label: 'Equipamentos Instalados',
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <NavBar>
        <Header />
      </NavBar>

      {/* HERO SECTION */}
      <HeroSection id="home">
        <Container>
          <HeroContent>
            <HeroTitle>
              Sistemas de Segurança & Controle de Acesso
            </HeroTitle>
            <HeroSubtitle>
              A solução ideal para sua segurança. Com a Conecta Mais Tech, você sempre estará seguro.
            </HeroSubtitle>
            <FeaturesGrid>
              {features.map((feature) => (
                <FeatureBox key={feature.id}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureBox>
              ))}
            </FeaturesGrid>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* WHY CHOOSE SECTION */}
      <WhyChooseSection id="about">
        <Container>
          <WhyChooseContent>
            <WhyChooseText>
              <h2>
                Nós Tornaremos Seu Lar e Negócio <span>Completamente Seguros.</span>
              </h2>
              <p>
                A Conecta Mais Tech é uma empresa especializada em zelar pela sua segurança. Com tecnologias avançadas como Smart Intrusion Prevention (SIP), ColorHunter e Active Deterrence, nós prevenimos crimes, reduzimos falsos alarmes e oferecemos monitoramento 24 horas para sua tranquilidade.
              </p>
              <CTAButton onClick={() => alert('Solicitar Orçamento Gratuito')}>
                Solicitar Orçamento Gratuito
              </CTAButton>
              <StatsGrid>
                {stats.map((stat) => (
                  <StatBox key={stat.id}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </StatBox>
                ))}
              </StatsGrid>
            </WhyChooseText>
            <WhyChooseImage>
              <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: colors.lightGray,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
              }}>
                <img src={logo} alt="image" />
              </div>
            </WhyChooseImage>
          </WhyChooseContent>
        </Container>
      </WhyChooseSection>

      {/* SERVICES SECTION */}
      <ServicesSection id="services">
        <Container>
          <h2>Nossos Serviços e Equipamentos</h2>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      {/* FOOTER */}
      <Footer>
        <Container>
          <FooterContent>
            <div>
              <h4>Sobre Nós</h4>
              <p>
                A Conecta Mais Tech é uma empresa especializada em soluções de segurança e controle de acesso para residências, condomínios, escritórios e indústrias.
              </p>
            </div>
            <div>
              <h4>Serviços</h4>
              <ul>
                <li><a href="#services">Controle de Acesso</a></li>
                <li><a href="#services">Monitoramento CFTV</a></li>
                <li><a href="#services">Alarmes e Proteção</a></li>
                <li><a href="#services">Portões Automáticos</a></li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li><a href="tel:08008804414">0800 880 4414</a></li>
                <li><a href="tel:92982214414">92 98221 4414</a></li>
                <li><a href="mailto:contato@conectamaistech.com.br">contato@conectamaistech.com.br</a></li>
                <li><a href="https://www.conectamaistech.com.br">www.conectamaistech.com.br</a></li>
              </ul>
            </div>
            <div>
              <h4>Redes Sociais</h4>
              <ul>
                <li><a href="#social">Facebook</a></li>
                <li><a href="#social">Instagram</a></li>
                <li><a href="#social">LinkedIn</a></li>
                <li><a href="#social">WhatsApp</a></li>
              </ul>
            </div>
          </FooterContent>
          <FooterBottom>
            <p>&copy; 2025 Conecta Mais Tech. Todos os direitos reservados. | CNPJ: 35.710.481/0001-03</p>
          </FooterBottom>
        </Container>
      </Footer>
    </>
  );
};

export default App;