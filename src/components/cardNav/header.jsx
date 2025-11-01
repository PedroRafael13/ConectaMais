import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuButton,
  Dropdown,
  DropdownItem,
  SocialMedia,
  SocialIcon,
  MobileButton,
  MobileMenu,
  MobileItem,
  MobileDropdown,
  MobileDropdownItem,
} from "./styled";
import LogoOne from "../../assets/CONECTA MAIS 3.png";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRefs = useRef({});

  // Mapeamento de rotas para cada item do menu
  const routeMap = {
    "Nossa História": "/nossa-historia",
    "Atuação Nacional": "/atuacao-nacional",
    "Gestão de Qualidade": "/gestao-qualidade",
    "Certificações e Premiações": "/certificacoes",
    "Inovação": "/inovacao",
    "Valorização dos Colaboradores": "/valorizacao-colaboradores",
    "Responsabilidade": "/responsabilidade",


    "Agente de Portaria": "/agentConcierge",
    "Remote": "/remote",
    "Serviço 3": "/servicos/servico-3",


    "Segmento 1": "/segmentos/segmento-1",
    "Segmento 2": "/segmentos/segmento-2",
    "Segmento 3": "/segmentos/segmento-3",
    "Portal 1": "/portal/portal-1",
    "Portal 2": "/portal/portal-2",
    "Email": "/contato/email",
    "Telefone": "/contato/telefone",
    "Localização": "/contato/localizacao",
  };

  const menuItems = {
    Empresa: [
      "Nossa História",
      "Atuação Nacional",
      "Gestão de Qualidade",
      "Certificações e Premiações",
      "Inovação",
      "Valorização dos Colaboradores",
      "Responsabilidade",
    ],
    "Serviços": ["Agente de Portaria", "Portaria Remota", "Sergurança"],
   ' Segmentos': ["Segmento 1", "Segmento 2", "Segmento 3"],
    "Portal do Colaborador": ["Portal 1", "Portal 2"],
   ' Contato': ["Email", "Telefone", "Localização"],
  };

  const socialMedia = [
    { icon: "🔗", url: "#" },
    { icon: "📘", url: "#" },
    { icon: "📷", url: "#" },
    { icon: "📺", url: "#" },
    { icon: "✉️", url: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        {/* 🔹 LOGO com Link */}
        <Logo>
          <Link to="/">
            <img src={LogoOne} alt="Logo Conecta Mais" />
          </Link>
        </Logo>

        {/* 🔹 MENU centralizado */}
        <Menu>
          {Object.keys(menuItems).map((item) => (
            <MenuItem key={item} ref={(el) => (dropdownRefs.current[item] = el)}>
              <MenuButton
                onClick={() => toggleDropdown(item)}
                isActive={activeDropdown === item}
              >
                {item}
              </MenuButton>

              {activeDropdown === item && (
                <Dropdown>
                  {menuItems[item].map((sub) => (
                    <DropdownItem key={sub} onClick={closeAll}>
                      <Link to={routeMap[sub] || "#"}>{sub}</Link>
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </MenuItem>
          ))}
        </Menu>

        {/* 🔹 ÍCONES à direita */}
        <SocialMedia>
          {socialMedia.map((s, i) => (
            <SocialIcon key={i} href={s.url}>
              {s.icon}
            </SocialIcon>
          ))}
        </SocialMedia>

        {/* 🔹 Botão Mobile */}
        <MobileButton onClick={() => setIsMobileOpen(!isMobileOpen)}>
          ☰
        </MobileButton>
      </Nav>

      {/* 🔹 Menu Mobile */}
      <MobileMenu isOpen={isMobileOpen}>
        {Object.keys(menuItems).map((item) => (
          <MobileItem key={item}>
            <MenuButton
              onClick={() => toggleDropdown(item)}
              isActive={activeDropdown === item}
            >
              {item}
            </MenuButton>
            {activeDropdown === item && (
              <MobileDropdown>
                {menuItems[item].map((sub) => (
                  <MobileDropdownItem key={sub} onClick={closeAll}>
                    <Link to={routeMap[sub] || "#"}>{sub}</Link>
                  </MobileDropdownItem>
                ))}
              </MobileDropdown>
            )}
          </MobileItem>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};