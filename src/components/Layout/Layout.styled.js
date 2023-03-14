import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Appbar = styled.header`
   background: linear-gradient(62.93deg, rgb(234, 138, 74) 19.68%, rgb(255, 107, 8) 89.55%);
`;

const Container = styled.div`
   margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 32px;
  padding-bottom: 32px;

  text-transform: capitalize;

  border-bottom: 4px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    border-color: #faba18;
    border-radius: 4px;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #f6fa18;
  }
`;

export { Appbar, Container, Navigation, NavItem };
