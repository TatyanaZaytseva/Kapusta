import { Outlet } from 'react-router-dom';
import { HeaderBox } from './Header.styled';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderBox>
        <picture>
          <source
            srcSet={process.env.PUBLIC_URL + '/images/logo/logo.webp 1x'}
            type="image/webp"
          />

          <img
            src={process.env.PUBLIC_URL + '/images/logo/logo.png'}
            alt="logo"
          />
        </picture>

        {isLoggedIn && <UserMenu />}
      </HeaderBox>

      <Outlet />
    </>
  );
}
