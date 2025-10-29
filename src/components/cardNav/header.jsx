import React, { useState, useRef, useEffect } from "react";
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
    Serviços: ["Serviço 1", "Serviço 2", "Serviço 3"],
    Segmentos: ["Segmento 1", "Segmento 2", "Segmento 3"],
    "Portal do Colaborador": ["Portal 1", "Portal 2"],
    Contato: ["Email", "Telefone", "Localização"],
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
        {/* 🔹 LOGO corrigida */}
        <Logo>
          <img src={LogoOne} alt="Logo Conecta Mais" />
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
                      {sub}
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
                    {sub}
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
