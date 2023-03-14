import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import { AiOutlineHome } from 'react-icons/ai';
import { Appbar, Container, Navigation, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Appbar>
        <Container>
          <Navigation>
            <NavItem to="/">
              <AiOutlineHome size={24} outline=" rgb(255, 107, 8)" />
              <span>Home</span>
            </NavItem>
            <NavItem to="movies">
              <TbMovie size={24} outline=" rgb(255, 107, 8)" />
              <span>Movies</span>
            </NavItem>
          </Navigation>
        </Container>
      </Appbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
