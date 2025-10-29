import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeaderContainer = styled.header`
  background: #ffffff;
  color: #001f3f;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  z-index: 10;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 55px;
    width: auto;
      margin-left: -55px;
    cursor: pointer;
  }5px;
  
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #001f3f;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 0.3px;

  ${({ isActive }) =>
    isActive &&
    `
    color: #f5c400;
  `}

  &:hover {
    color: #f5c400;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  border-radius: 4px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  padding: 0.5rem 0;
  margin: 0;
  min-width: 200px;
  animation: ${fadeIn} 0.2s ease;
`;

export const DropdownItem = styled.li`
  padding: 0.75rem 1rem;
  color: #001f3f;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f7fa;
    color: #f5c400;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SocialIcon = styled.a`
  color: #f5c400;
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #001f3f;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 1rem 1.5rem;
  animation: ${fadeIn} 0.3s ease;

  @media (min-width: 901px) {
    display: none;
  }
`;

export const MobileItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const MobileDropdown = styled.ul`
  background: #f5f7fa;
  border-radius: 4px;
  list-style: none;
  padding: 0.3rem 0;
  margin-top: 0.3rem;
`;

export const MobileDropdownItem = styled.li`
  padding: 0.5rem 1rem;
  color: #001f3f;
  cursor: pointer;

  &:hover {
    color: #f5c400;
  }
`;
