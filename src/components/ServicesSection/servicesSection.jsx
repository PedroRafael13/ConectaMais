import { Card, CardText, CardTitle, Grid, IconWrapper, LearnMore, Section, Subtitle, Title } from "./styled";
import {
  ShieldCheckIcon,
  ClockIcon,
  KeyIcon, // Importando o ícone para controle de acesso
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


  const services = [
    {
      id: "portaria-remota",
      title: "Segurança 24h",
      desc: "Nossa Equipe e tecnologia trabalham 24 horas por dia, 7 dias por semana, para garantir a sua segurança e a do seu patrimônio, sem falhar ou interrupções",
      icon: ShieldCheckIcon,
      href: "/portaria-remota",
    },
    {
      id: "monitoramento-inteligente",
      title: "Tecnologia de Ponta",
      desc: "Câmeras com inteligência perimetral e alertas em tempo real via app.",
      icon: ClockIcon,
      href: "/monitoramento-inteligente",
    },
    {
      id: "controle-de-acesso",
      title: "App Exclusivo",
      desc: "RFID, biometria e reconhecimento facial integrados com histórico de entradas e saídas.",
      icon: KeyIcon, // Adicionando o ícone
      href: "/controle-de-acesso",
    },
    {
      id: "automacao-portoes",
      title: "Automação Inteligente",
      desc: "Portões automáticos, sensores e integração completa com a portaria remota.",
      icon: Cog6ToothIcon,
      href: "/automacao-portoes",
    },
  ];

  // ... restante do código (container, card variants)

  return (
    <Section id="services">
      <Title>Nossos Diferenciais</Title>
      <Subtitle>
        Por que Escolher a Conectamais
      </Subtitle>

      <Grid variants={container} initial="hidden" animate="show">
        {services.map((service) => (
          <Card
            key={service.id}
            variants={card}
            href={service.href}
            whileHover={{ scale: 1.02 }}
          >
            <IconWrapper>
              <service.icon />
            </IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardText>{service.desc}</CardText>
            <LearnMore>
              Saiba mais
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </LearnMore>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}