//import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
// import './App.css'
import portariaImg from "../../assets/image.png"

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 60px 20px;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin: 8px 0 0 0;
`

const CardsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  padding: 0 20px;
`

const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-8px);
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  }
`

const CardContent = styled.div`
  padding: 24px;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 12px 0;
  line-height: 1.4;
`

const CardDescription = styled.p`
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 20px 0;
`

const ReadMoreButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #22c55e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: gap 0.2s ease;

  &:hover {
    gap: 12px;
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`

const Footer = styled.div`
  text-align: center;
  margin-top: 60px;
  color: #64748b;
  font-size: 0.875rem;
`

export function CardServices() {
  const cards = [
    {
      id: 1,
      title: "Agente de Portaria",
      description: "Controle total de acessos com monitoramento 24h e sistema de validação facial integrado.",
    image: portariaImg,
      link: "/agentConcierges"
    },
    {
      id: 2,
      title: "Monitoramento Inteligente 24h",
      description: "Câmeras com inteligência perimetral e alertas em tempo real via aplicativo mobile.",
     // image: monitoramentoImg,
      link: "/monitoramento"
    },
    {
      id: 3,
      title: "Controle de Acesso Biométrico",
      description: "RFID, biometria e reconhecimento facial integrados com histórico completo de entradas e saídas.",
      //image: controleAcessoImg,
      link: "/controle-acesso"
    },
    {
      id: 4,
      title: "Instalação de Câmeras de Segurança",
      description: "Soluções completas em CFTV com câmeras de alta resolução e armazenamento em nuvem.",
      //image: camerasImg,
      link: "/cameras"
    },
    {
      id: 5,
      title: "Automação de Portões",
      description: "Portões automáticos, sensores e integração completa com a portaria remota.",
     // image: portariaImg,
      link: "/automacao"
    },
    {
      id: 6,
      title: "Solicite seu Orçamento",
      description: "Entre em contato conosco e receba uma proposta personalizada para seu condomínio ou empresa.",
      // image: monitoramentoImg,
      link: "/orcamento"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <Container>
      <Header>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo>
            <Shield size={48} color="#2563eb" />
            <Title>CONECTAMAIS</Title>
          </Logo>
          <Subtitle>Soluções completas em segurança eletrônica</Subtitle>
        </motion.div>
      </Header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <CardsGrid>
          {cards.map((card) => (
            <Card
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardImage>
                  <img src={card.image} alt={card.title} />
                </CardImage>
                <CardContent>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                  <ReadMoreButton
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Saiba mais
                    <ArrowRight size={18} />
                  </ReadMoreButton>
                </CardContent>
              </a>
            </Card>
          ))}
        </CardsGrid>
      </motion.div>

      <Footer>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          © 2025 Conectamais - Sua segurança, nossa prioridade
        </motion.p>
      </Footer>
    </Container>
  )
}

export default CardServices